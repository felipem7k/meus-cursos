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
    public function testAvaliadorDeveBuscar3MaioresValores()
    {
        $leilao = new Leilao("Canivete dourado");
        $joao = new Usuario("João");
        $maria = new Usuario("Maria");
        $ana = new Usuario("Ana");
        $jorge = new Usuario("Jorge");

        $leilao->recebeLance(new Lance($ana, 1500));
        $leilao->recebeLance(new Lance($joao, 1000));
        $leilao->recebeLance(new Lance($maria, 2000));
        $leilao->recebeLance(new Lance($jorge, 1700));

        $leiloeiro = new Avaliador();
        $leiloeiro->avalia($leilao);

        $maiores = $leiloeiro->getMaioresLances();
        static::assertCount(3, $maiores);
        static::assertEquals(2000, $maiores[0]->getValor());
        static::assertEquals(1700, $maiores[1]->getValor());
        static::assertEquals(1500, $maiores[2]->getValor());
    }
}