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
    /**
     * 
     * @dataProvider leiloes
     */
    public function testBuscaLeiloesNaoFinalizados(array $leiloes)
    {
        
        $leilaoDao = new LeilaoDao(self::$pdo);
        foreach ($leiloes as $leilao) {
            $leilaoDao->salva($leilao);
        }

        $leiloes = $leilaoDao->recuperarNaoFinalizados();

        self::assertCount(1, $leiloes);
        self::assertContainsOnlyInstancesOf(Leilao::class, $leiloes);
        self::assertSame("Variant 0km", $leiloes[0]->recuperarDescricao());
    }
    /**
     * 
     * @dataProvider leiloes
     */
    public function testBuscaLeiloesFinalizados(array $leiloes)
    {
        $leilaoDao = new LeilaoDao(self::$pdo);
        foreach ($leiloes as $leilao) {
            $leilaoDao->salva($leilao);
        }

        $leiloes = $leilaoDao->recuperarFinalizados();

        self::assertCount(1, $leiloes);
        self::assertContainsOnlyInstancesOf(Leilao::class, $leiloes);
        self::assertSame("Fiat 147 0km", $leiloes[0]->recuperarDescricao());
    }
    public function testAoAtualizarLeilaoStatusDeveSerAlterado()
    {
        $leilao = new Leilao("Brasilia Amarela");
        $leilaoDao = new LeilaoDao(self::$pdo);
        $leilao = $leilaoDao->salva($leilao);
        $leilao->finaliza();

        $leilaoDao->atualiza($leilao);

        $leiloes = $leilaoDao->recuperarFinalizados();
        self::assertCount(1, $leiloes);
        self::assertSame("Brasilia Amarela", $leiloes[0]->recuperarDescricao());
        self::assertTrue($leiloes[0]->estaFinalizado());
    }
    protected function tearDown(): void
    {
        self::$pdo->rollBack();
    }

    public function leiloes()
    {
        $naoFinalizado = new Leilao("Variant 0km");
        $finalizado = new Leilao("Fiat 147 0km");
        $finalizado->finaliza();
        return [
            [
                [$naoFinalizado, $finalizado]
            ]
        ];
    }
}
