<?php

class ProdutoRepositorio 
{
    public function __construct(private PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    private function formatarObjeto(array $data): Produto
    {
        return new Produto(
            $data["id"],
            $data["tipo"],
            $data["nome"],
            $data["descricao"],
            $data["preco"],
            $data["imagem"],
        );
    }

    public function produtosPorTipo(string $tipo): array
    {
        $sql = "SELECT * FROM produtos WHERE tipo = '$tipo' ORDER BY preco;";
        $stmt = $this->pdo->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $dados = array_map(function($produto){
            return $this->formatarObjeto($produto);
        }, $result);

        return $dados;
    }

    public function buscarTodos(): array
    {
        $sql = "SELECT * FROM produtos ORDER BY preco;";
        $stmt = $this->pdo->query($sql);
        $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $todosOsDados = array_map(function($produto){
            return $this->formatarObjeto($produto);
        }, $dados);

        return $todosOsDados;
    }

    public function deletar(int $id): void
    {
        $sql = "DELETE FROM produtos WHERE id = ?;";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, $id, PDO::PARAM_INT);
        $stmt->execute();
    }

    public function salvar(Produto $produto): void
    {
        $sql = "INSERT INTO produtos (tipo, nome, descricao, preco, imagem) VALUES (:tipo, :nome, :descricao, :preco, :imagem);";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue("tipo", $produto->getTipo());
        $stmt->bindValue("nome", $produto->getNome());
        $stmt->bindValue("descricao", $produto->getDescricao());
        $stmt->bindValue("preco", $produto->getPreco());
        $stmt->bindValue("imagem", $produto->getImagem());
        $stmt->execute();
    }

    private function atualizarFoto(Produto $produto)
    {
        $sql = "UPDATE produtos SET imagem = ? WHERE id = ?";
        $statement = $this->pdo->prepare($sql);
        $statement->bindValue(1, $produto->getImagem());
        $statement->bindValue(2, $produto->getId());
        $statement->execute();
    }

    public function editar(Produto $produto): void
    {
        $sql = "UPDATE produtos 
                SET tipo = :tipo, nome = :nome, descricao = :descricao, preco = :preco, imagem = :imagem 
                WHERE id = :id;";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue("id", $produto->getId());
        $stmt->bindValue("tipo", $produto->getTipo());
        $stmt->bindValue("nome", $produto->getNome());
        $stmt->bindValue("descricao", $produto->getDescricao());
        $stmt->bindValue("preco", $produto->getPreco());
        $stmt->execute();

        if($produto->getImagem() !== 'logo-serenatto.png'){
            $this->atualizarFoto($produto);
        }
    }

    public function buscar(int $id)
    {
        $sql = "SELECT * FROM produtos WHERE id = ?";
        $statement = $this->pdo->prepare($sql);
        $statement->bindValue(1, $id);
        $statement->execute();

        $dados = $statement->fetch(PDO::FETCH_ASSOC);

        return $this->formatarObjeto($dados);
    }
}