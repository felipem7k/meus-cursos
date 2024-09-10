<?php

class ProdutoRepositorio 
{
    private PDO $pdo;
    
    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function produtosPorTipo(string $tipo): array
    {
        $sql = "SELECT * FROM produtos WHERE tipo = '$tipo' ORDER BY preco;";
        $stmt = $this->pdo->query($sql);
        $produtosCafe = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $dadosCafe = array_map(function($cafe){
            return new Produto(
                $cafe["id"],
                $cafe["tipo"],
                $cafe["nome"],
                $cafe["descricao"],
                $cafe["imagem"],
                $cafe["preco"]
            );
        }, $produtosCafe);

        return $dadosCafe;
    }
}