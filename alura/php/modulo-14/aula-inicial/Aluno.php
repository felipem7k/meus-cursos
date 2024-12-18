<?php

use \Ds\Hashable;

class Aluno implements Hashable
{
    public function __construct(public string $nome)
    {

    }

    public function equals($aluno): bool
    {
        if (!$aluno instanceof Aluno) {
            return false;
        }

        return $aluno->nome === $this->nome;
    }

    public function hash(): string
    {
        return $this->nome;
    }
}
