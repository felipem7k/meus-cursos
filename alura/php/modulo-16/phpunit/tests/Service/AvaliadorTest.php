<?php

namespace Alura\Leilao\Tests\Service;

use Alura\Leilao\Model\Lance;
use Alura\Leilao\Model\Leilao;
use Alura\Leilao\Model\Usuario;
use Alura\Leilao\Service\Avaliador;
use PHPUnit\Framework\TestCase;

final class AvaliadorTest extends TestCase
{
    protected $comparisonFailure = null;
    public function testAvaliadorDeveEcontrarOMaiorValorDeLancesEmOrdemCrescente()
    {
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

        self::assertEquals($valorEsperado, $maiorValor);
    }
    public function testAvaliadorDeveEcontrarOMaiorValorDeLancesEmOrdemDecrescente()
    {
        // Arrange - Given
        $leilao = new Leilao("Celta preto");

        $maria = new Usuario("Maria");
        $joao = new Usuario("Joao");

        $leilao->recebeLance(new Lance($maria, 500));
        $leilao->recebeLance(new Lance($joao, 200));

        // Act - When
        $leiloeiro = new Avaliador();
        $leiloeiro->avalia($leilao);
        $maiorValor = $leiloeiro->getMaiorValor();

        // Assert Then
        $valorEsperado = 500;

        self::assertEquals($valorEsperado, $maiorValor);
    }

    public function testAvaliadorDeveEcontrarOMenorValorDeLancesEmOrdemCrescente()
    {
        // Arrange - Given
        $leilao = new Leilao("Celta preto");

        $maria = new Usuario("Maria");
        $joao = new Usuario("Joao");

        $leilao->recebeLance(new Lance($joao, 200));
        $leilao->recebeLance(new Lance($maria, 500));

        // Act - When
        $leiloeiro = new Avaliador();
        $leiloeiro->avalia($leilao);
        $menorValor = $leiloeiro->getMenorValor();

        // Assert Then
        $valorEsperado = 200;

        self::assertEquals($valorEsperado,$menorValor);
    }
    public function testAvaliadorDeveEcontrarOMenorValorDeLancesEmOrdemDecrescente()
    {
        // Arrange - Given
        $leilao = new Leilao("Celta preto");

        $maria = new Usuario("Maria");
        $joao = new Usuario("Joao");

        $leilao->recebeLance(new Lance($maria, 500));
        $leilao->recebeLance(new Lance($joao, 200));

        // Act - When
        $leiloeiro = new Avaliador();
        $leiloeiro->avalia($leilao);
        $menorValor = $leiloeiro->getMenorValor();

        // Assert Then
        $valorEsperado = 200;

        self::assertEquals($valorEsperado,$menorValor);
    }
}