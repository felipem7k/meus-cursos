<?php

namespace Alura\Leilao\Tests\Service;

use Alura\Leilao\Model\Lance;
use Alura\Leilao\Model\Leilao;
use Alura\Leilao\Model\Usuario;
use Alura\Leilao\Service\Avaliador;
use PHPUnit\Framework\TestCase;

final class AvaliadorTest extends TestCase
{
    private $leiloeiro;
    protected function setUp(): void
    {
        $this->leiloeiro = new Avaliador();
    }
    /**
     * @dataProvider entregaLeiloes
     */
    public function testAvaliadorDeveEcontrarOMaiorValorDeLances(Leilao $leilao)
    {
        // Act - When
        $this->leiloeiro->avalia($leilao);
        $maiorValor = $this->leiloeiro->getMaiorValor();

        // Assert Then
        $valorEsperado = 2000;

        self::assertEquals($valorEsperado, $maiorValor);
    }
    /**
     * @dataProvider entregaLeiloes
     */
    public function testAvaliadorDeveEcontrarOMenorValorDeLances(Leilao $leilao)
    {
        // Act - When
        $this->leiloeiro->avalia($leilao);
        $menorValor = $this->leiloeiro->getMenorValor();

        // Assert Then
        $valorEsperado = 1000;

        self::assertEquals($valorEsperado,$menorValor);
    }
    /**
     * @dataProvider entregaLeiloes
     */
    public function testAvaliadorDeveBuscar3MaioresValores(Leilao $leilao)
    {
        $this->leiloeiro->avalia($leilao);

        $maiores = $this->leiloeiro->getMaioresLances();
        static::assertCount(3, $maiores);
        static::assertEquals(2000, $maiores[0]->getValor());
        static::assertEquals(1700, $maiores[1]->getValor());
        static::assertEquals(1500, $maiores[2]->getValor());
    }

    // DADOS 
    public static function leilaoEmOrdemCrescente()
    {
        $leilao = new Leilao("Chevete branco 0km");
        $joao = new Usuario("João");
        $maria = new Usuario("Maria");
        $ana = new Usuario("Ana");
        $jorge = new Usuario("Jorge");

        $leilao->recebeLance(new Lance($joao, 1000));
        $leilao->recebeLance(new Lance($ana, 1500));
        $leilao->recebeLance(new Lance($jorge, 1700));
        $leilao->recebeLance(new Lance($maria, 2000));

        return $leilao;
    }
    public static function leilaoEmOrdemDecrescente()
    {
        $leilao = new Leilao("Chevete branco 0km");
        $joao = new Usuario("João");
        $maria = new Usuario("Maria");
        $ana = new Usuario("Ana");
        $jorge = new Usuario("Jorge");

        $leilao->recebeLance(new Lance($maria, 2000));
        $leilao->recebeLance(new Lance($jorge, 1700));
        $leilao->recebeLance(new Lance($ana, 1500));
        $leilao->recebeLance(new Lance($joao, 1000));

        return $leilao;
    }
    public static function leilaoEmOrdemAleatoria()
    {
        $leilao = new Leilao("Chevete branco 0km");
        $joao = new Usuario("João");
        $maria = new Usuario("Maria");
        $ana = new Usuario("Ana");
        $jorge = new Usuario("Jorge");

        $leilao->recebeLance(new Lance($ana, 1500));
        $leilao->recebeLance(new Lance($maria, 2000));
        $leilao->recebeLance(new Lance($joao, 1000));
        $leilao->recebeLance(new Lance($jorge, 1700));

        return $leilao;
    }
    public static function entregaLeiloes()
    {
        return [
            [self::leilaoEmOrdemCrescente()],
            [self::leilaoEmOrdemDecrescente()],
            [self::leilaoEmOrdemAleatoria()]
        ];
    }
}