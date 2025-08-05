<?php

namespace Alura\Calisthenics\Domain\Student;

class FullName
{
    public function __construct(
        private string $firstName,
        private string $lastName
    ) {}

    public function __toString(): string
    {
        return "{$this->firstName} {$this->lastName}";
    }
}
