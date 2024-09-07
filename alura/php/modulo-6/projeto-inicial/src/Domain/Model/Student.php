<?php

namespace Felipem7k\PhpPdo\Domain\Model;

class Student
{
    public function __construct(public readonly ?int $id, public readonly string $name, public readonly \DateTimeInterface $birthDate)
    {
    }

    public function defineId(int $id): void
    {
        if (!is_null($this->id)) {
            throw new \DomainException('Você só pode definir o ID uma vez.');
        }

        $this->id = $id;
    }

    public function changeName(string $newName): void
    {
        $this->name = $newName;
    }

    public function age(): int
    {
        return $this->birthDate
            ->diff(new \DateTimeImmutable())
            ->y;
    }
}
