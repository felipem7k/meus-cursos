<?php

namespace Alura\Leilao\Tests\Service;

use Alura\Leilao\Model\Leilao;
use Alura\Leilao\Dao\Leilao as LeilaoDao;
use Alura\Leilao\Service\Encerrador;
use DateTimeImmutable;
use PDO;
use PHPUnit\Framework\TestCase;

class EncerradorTest extends TestCase
{
    public function testLeiloesComMaisDeUmaSemanaDevemSerEncerrados()
    {
        $fiat147 = new Leilao("Fiat 147 0km", new DateTimeImmutable('8 days ago'));
        $variant = new Leilao("Variant 1942 0km", new DateTimeImmutable('10 days ago'));

        $leilaoDao = $this->createMock(LeilaoDao::class);
        // $leilaoDao = $this->getMockBuilder(LeilaoDao::class)
        //     ->setConstructorArgs([new PDO('sqlite::memory:')])
        //     ->getMock();

        $leilaoDao->method('recuperarNaoFinalizados')
            ->willReturn([$fiat147, $variant]);

        $encerrador = new Encerrador($leilaoDao);
        $encerrador->encerra();

        // $leilaoDao->expects($this->exactly(2))->method('atualiza');

        $leiloes = [$fiat147, $variant];
        self::assertCount(2, $leiloes);
        self::assertTrue($leiloes[0]->estaFinalizado());
        self::assertTrue($leiloes[1]->estaFinalizado());
    }
}
