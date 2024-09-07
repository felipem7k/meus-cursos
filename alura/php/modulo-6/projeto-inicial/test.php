<?php

use Felipem7k\PhpPdo\Infrastructure\Repository\PdoStudentRepository;

$databasePath = __DIR__ . '/../../../banco.sqlite';
$pdo = new \PDO($databasePath);
$repository = new PdoStudentRepository($pdo);

empty($repository->allStudents());