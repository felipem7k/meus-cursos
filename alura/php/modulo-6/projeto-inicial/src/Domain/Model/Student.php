<?php

namespace Felipem7k\PhpPdo\Domain\Model;

class Student
{
    private ?int $id;
    private array $phones = [];

    public function __construct(?int $id, public readonly string $name, public readonly \DateTimeInterface $birthDate)
    {
        $this->id = $id;
    }

    public function getPhones(): array
    {
        return $this->phones;
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function addPhone(Phone $phone): void
    {
        $this->phones[] = $phone;
    }
}
