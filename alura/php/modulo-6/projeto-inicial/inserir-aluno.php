<?php

use Felipem7k\PhpPdo\Domain\Model\Student;
require_once 'vendor/autoload.php';

$caminhoBanco = __DIR__ . '/banco.sqlite';
$pdo = new PDO('sqlite:' . $caminhoBanco);

$student = new Student(
    null,
    'Felipe Machado',
    new \DateTimeImmutable('1997-10-15')
);

$sqlInsert = "INSERT INTO students (name, birth_date) VALUES ('{$student->name}', '{$student->birthDate->format('Y-m-d')}');";

var_dump($pdo->exec($sqlInsert));
