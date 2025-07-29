<?php

namespace Alura\Solid\Service;

use Alura\Solid\Model\Assistivel;

class Assistidor
{
    public function assistir(Assistivel $contaudo)
    {
        $contaudo->assistir();
    }
}
