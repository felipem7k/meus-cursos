<?php
use Felipem7k\PhpPdo\Domain\Model\Student;

require_once 'vendor/autoload.php';

$student = new Student(
    null,
    'Felipe Machado',
    new \DateTimeImmutable('1997-10-15')
);

echo $student->age();