<?php

namespace Alura\Calisthenics\Domain\Student;

class Adress
{
    public function __construct(
        public string $street,
        public string $number,
        public string $province,
        public string $city,
        public string $state,
        public string $country
    ) {}
}
