<?php

namespace Alura\Leilao\Service;

use Alura\Leilao\Dao\Leilao as LeilaoDao;
use DomainException;

class Encerrador
{
    public function __construct(private LeilaoDao $dao, private EnviadorEmail $enviadorEmail) {
    }

    public function encerra()
    {
        $leiloes = $this->dao->recuperarNaoFinalizados();

        foreach ($leiloes as $leilao) {
            if ($leilao->temMaisDeUmaSemana()) {
                try {
                    $leilao->finaliza();
                    $this->dao->atualiza($leilao);
                    $this->enviadorEmail->notificarTerminoLeilao($leilao);
                } catch(DomainException $e) {
                    error_log($e->getMessage());
                }
            }
        }
    }
}
