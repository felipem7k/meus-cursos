<?php
namespace Alura\Leilao\Tests\Models;

use Alura\Leilao\Model\Lance;
use Alura\Leilao\Model\Leilao;
use Alura\Leilao\Model\Usuario;
use PHPUnit\Framework\TestCase;

class LeilaoTest extends TestCase
{
    public function testLeilaoNaoDeveAceitarMaisDe5LancesPorUsuario()
    {
        $this->expectException(\DomainException::class);
        $this->expectExceptionMessage('Usuário não pode dar mais de 5 lances.');

        $joao = new Usuario('João');
        $maria = new Usuario('Maria');

        $leilao = new Leilao('Carro Antigo');
        $leilao->recebeLance(new Lance($joao, 1000));
        $leilao->recebeLance(new Lance($maria, 2000));
        $leilao->recebeLance(new Lance($joao, 3000));
        $leilao->recebeLance(new Lance($maria, 4000));
        $leilao->recebeLance(new Lance($joao, 5000));
        $leilao->recebeLance(new Lance($maria, 6000));
        $leilao->recebeLance(new Lance($joao, 7000));
        $leilao->recebeLance(new Lance($maria, 8000));
        $leilao->recebeLance(new Lance($joao, 9000));
        $leilao->recebeLance(new Lance($maria, 10000));

        $leilao->recebeLance(new Lance($joao, 11000));

        static::assertCount(10, $leilao->getLances());
        static::assertEquals(10000, $leilao->getLances()[array_key_last($leilao->getLances())]->getValor());
    }
    public function testLeilaoNaoDeveReceberLancesRepetidos()
    {
        $this->expectException(\DomainException::class);
        $this->expectExceptionMessage('Usuário não pode dar dois lances seguidos.');

        $leilao = new Leilao('Variante');
        $ana = new Usuario('Ana');
        $leilao->recebeLance(new Lance($ana, 1000));
        $leilao->recebeLance(new Lance($ana, 1500));

        static::assertCount(1, $leilao->getLances());
        static::assertEquals(1000, $leilao->getLances()[0]->getValor());
    }

    /**
     * @dataProvider geraLances
     */
    public function testLeilaoDeveReceberLances(int $qtdLances, Leilao $leilao, array $valores)
    {
        static::assertCount($qtdLances, $leilao->getLances());
        
        foreach ($valores as $i => $valorEsperado) {
            static::assertEquals($valorEsperado, $leilao->getLances()[$i]->getValor());
        }
    }

    public function geraLances()
    {
        $joao = new Usuario('João');
        $maria = new Usuario('Maria');

        $leilaoCom2Lances = new Leilao('Carro Antigo');
        $leilaoCom2Lances->recebeLance(new Lance($joao, 1000));
        $leilaoCom2Lances->recebeLance(new Lance($maria, 2000));

        $leilaoCom1Lance = new Leilao('Carro Novo');
        $leilaoCom1Lance->recebeLance(new Lance($joao, 6000));

        return [
            "2-lances" => [2, $leilaoCom2Lances, [1000, 2000]],
            "1-lance" => [1, $leilaoCom1Lance, [6000]]
        ];
    }
}
