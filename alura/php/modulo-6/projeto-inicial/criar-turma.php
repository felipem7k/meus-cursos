<?php

use Felipem7k\PhpPdo\Domain\Model\Student;
use Felipem7k\PhpPdo\Infrastructure\Persistence\ConnectionCreator;
use Felipem7k\PhpPdo\Infrastructure\Repository\PdoStudentRepository;

require_once 'vendor/autoload.php';

$connection = ConnectionCreator::createConnection();
$studentRepository = new PdoStudentRepository($connection);

$connection->beginTransaction();

$aStudent = new Student(null, 'Nicco Belic', new \DateTimeImmutable('1985-05-01'));
$studentRepository->save($aStudent);

$anotherStudent = new Student(null, 'Dom Pedro', new \DateTimeImmutable('1985-05-01'));
$studentRepository->save($anotherStudent);

$connection->commit();