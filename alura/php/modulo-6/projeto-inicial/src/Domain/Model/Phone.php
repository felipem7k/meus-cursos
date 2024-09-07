<?php

namespace Felipem7k\PhpPdo\Domain\Model;

class Phone
{
    public function __construct(public readonly ?int $id, public readonly string $areaCode, public readonly string $number)
    {
        
    }

    public function formattedPhone(): string
    {
        return "($this->areaCode) $this->number";
    }
}