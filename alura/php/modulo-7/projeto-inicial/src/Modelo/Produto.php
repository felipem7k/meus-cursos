<?php 

class Produto 
{
    public function __construct(
        public readonly ?int $id,
        private string $tipo, 
        private string $nome, 
        private string $descricao,
        private float $preco,
        private string $imagem = "logo-serenatto.png")
    {
        $this->tipo = $tipo;
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->preco = $preco;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getTipo(): string
    {
        return $this->tipo;
    }
    
    public function getNome(): string
    {
        return $this->nome;
    }

    public function getDescricao(): string
    {
        return $this->descricao;
    }

    public function getImagem(): string
    {
        return $this->imagem;
    }

    public function getImagemDiretorio(): string
    {
        return "./img/$this->imagem";
    }

    public function getPreco(): float
    {
        return $this->preco;
    }

    public function getPrecoFormatado(): string
    {
        return "R$" . number_format($this->preco, 2) ;
    }
}