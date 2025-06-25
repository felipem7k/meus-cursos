<?php

namespace Alura\Leilao\Tests\Integration\Dao;

use Alura\Leilao\Model\Leilao;
use Alura\Leilao\Dao\Leilao as LeilaoDao;
use PDO;
use PHPUnit\Framework\TestCase;

class LeilaoDaoTest extends TestCase
{
    private static $pdo;

    public static function setUpBeforeClass(): void
    {
        self::$pdo = new PDO('sqlite::memory:');
        self::$pdo->exec('CREATE TABLE leiloes (
            id INTEGER primary key,
            descricao TEXT,
            finalizado BOOL,
            dataInicio TEXT
        );');
    }
    protected function setUp(): void
    {
        self::$pdo->beginTransaction();
    }

    public function testInsersaoEBuscaDevemFuncionar()
    {
        
        $leilao = new Leilao("Variant 0km");
        $leilaoDao = new LeilaoDao(self::$pdo);

        $leilaoDao->salva($leilao);

        $leiloes = $leilaoDao->recuperarNaoFinalizados();

        self::assertCount(1, $leiloes);
        self::assertContainsOnlyInstancesOf(Leilao::class, $leiloes);
        self::assertSame("Variant 0km", $leiloes[0]->recuperarDescricao());
    }

    protected function tearDown(): void
    {
        self::$pdo->rollBack();
    }
}
