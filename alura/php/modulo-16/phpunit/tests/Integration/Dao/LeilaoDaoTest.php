<?php

namespace Alura\Leilao\Tests\Integration\Dao;

use Alura\Leilao\Model\Leilao;
use Alura\Leilao\Dao\Leilao as LeilaoDao;
use PHPUnit\Framework\TestCase;

class LeilaoDaoTest extends TestCase
{
    public function testInsersaoEBuscaDevemFuncionar()
    {
        $leilao = new Leilao("Variant 0km");
        $leilaoDao = new LeilaoDao();

        $leilaoDao->salva($leilao);

        $leiloes = $leilaoDao->recuperarNaoFinalizados();

        self::assertCount(1, $leiloes);
        self::assertContainsOnlyInstancesOf(Leilao::class, $leiloes);
        self::assertSame("Variant 0km", $leiloes[0]->recuperarDescricao());
    }
}
