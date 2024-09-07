<?php

use Felipem7k\PhpPdo\Domain\Model\Student;
require_once 'vendor/autoload.php';

$caminhoBanco = __DIR__ . '/banco.sqlite';
$pdo = new PDO('sqlite:' . $caminhoBanco);

$student = new Student(
    null,
    "Dom Pedro",
    new \DateTimeImmutable('1997-10-23')
);

$sqlInsert = "INSERT INTO students (name, birth_date) VALUES (:name, :birth_date);";
$statement = $pdo->prepare($sqlInsert);

$statement->bindValue('name', $student->name);
$statement->bindValue('birth_date', $student->birthDate->format('Y-m-d'));

if ($statement->execute()) {
    echo "Aluno incluído";
}