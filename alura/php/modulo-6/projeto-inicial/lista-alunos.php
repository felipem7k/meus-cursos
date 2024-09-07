<?php

use Felipem7k\PhpPdo\Domain\Model\Student;
use Felipem7k\PhpPdo\Infrastructure\Persistence\ConnectionCreator;

require_once 'vendor/autoload.php';

$pdo = ConnectionCreator::createConnection();

$statement = $pdo->query('SELECT * FROM students');

// while ($studentData = $statement->fetch(PDO::FETCH_ASSOC)) {
//     $student = new Student($studentData['id'], $studentData['name'], new \DateTimeImmutable($studentData['birth_date']));

//     echo $student->age() . PHP_EOL;
// }
// exit;

$studentDataList = $statement->fetchAll(PDO::FETCH_ASSOC);
$studentsList = [];

foreach ($studentDataList as $studentData) {
    $studentsList[] = new Student($studentData['id'], $studentData['name'], new \DateTimeImmutable($studentData['birth_date']));
}

var_dump($studentsList);