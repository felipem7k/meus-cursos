<?php

use Felipem7k\PhpPdo\Domain\Model\Student;
use Felipem7k\PhpPdo\Infrastructure\Persistence\ConnectionCreator;

require_once 'vendor/autoload.php';

$pdo = ConnectionCreator::createConnection();

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