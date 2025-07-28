<?php

namespace Alura\Solid\Model;

class Feedback
{
    public function __construct(
        private int $nota,
        private ?string $depoimento
    ) {
        if ($this->nota < 9 && empty($this->depoimento)) {
            throw new \DomainException('Depoimento obrigatório');
        }
    }
}
