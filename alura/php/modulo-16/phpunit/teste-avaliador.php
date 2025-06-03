<?php

use Alura\Leilao\Model\Lance;
use Alura\Leilao\Model\Leilao;
use Alura\Leilao\Model\Usuario;
use Alura\Leilao\Service\Avaliador;

require "vendor/autoload.php";

// Arrange - Given
$leilao = new Leilao("Celta preto");

$maria = new Usuario("Maria");
$joao = new Usuario("Joao");

$leilao->recebeLance(new Lance($joao, 200));
$leilao->recebeLance(new Lance($maria, 500));

// Act - When
$leiloeiro = new Avaliador();
$leiloeiro->avalia($leilao);
$maiorValor = $leiloeiro->getMaiorValor();

// Assert Then
$valorEsperado = 500;

if ($maiorValor == $valorEsperado) {
    echo "TESTE OK";
} else {
    echo "TESTE FALHOU";
}