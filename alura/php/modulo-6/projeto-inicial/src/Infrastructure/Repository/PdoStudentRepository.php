<?php

namespace Felipem7k\PhpPdo\Infrastructure\Repository;

use DateTimeInterface;
use Felipem7k\PhpPdo\Domain\Model\Student;
use Felipem7k\PhpPdo\Domain\Repository\StudentRepository;
use PDO;

class PdoStudentRepository implements StudentRepository
{
    private PDO $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function allStudents(): array
    {
        $stmt = $this->connection->query('SELECT * FROM students;');

        return $this->hydrateStudentList($stmt);
    }

    public function stundentsBirthAt(DateTimeInterface $birthDate): array
    {       
        $sqlQuery = "SELECT * FROM students WHERE birth_date = ?;";
        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->bindValue(1, $birthDate->format('Y-m-d'));
        $stmt->execute();

        return $this->hydrateStudentList($stmt);
    }

    private function hydrateStudentList(\PDOStatement $stmt): array
    {
        $studentDataList = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $studentList = [];

        foreach ($studentDataList as $studentData) {
            $studentList[] = new Student(
                $studentData['id'],
                $studentData['name'],
                new \DateTimeImmutable($studentData['birth_date'])
            );
        }

        return $studentList;
    }

    public function save(Student $student): bool
    {
        if ($student->getId() === null) {
            return $this->insert($student);
        }

        return $this->update($student);
    }

    private function insert(Student $student): bool
    {
        $sqlInsert = "INSERT INTO students (name, birth_date) VALUES (:name, :birth_date);";
        $stmt = $this->connection->prepare($sqlInsert);

        $success = $stmt->execute([
            ':name' => $student->name,
            ':birth_date' => $student->birthDate->format('Y-m-d'),
        ]);

        if ($success) {
            $student->defineId($this->connection->lastInsertId());
        }

        return $success;
    }

    private function update(Student $student): bool
    {
        $updateQuery = "UPDATE students SET name = :name, birth_date = :birth_date WHERE id = :id;";
        $stmt = $this->connection->prepare($updateQuery);

        return $stmt->execute([
            ':name' => $student->name,
            ':birth_date' => $student->birthDate->format('Y-m-d'),
            ':id' => $student->getId()
        ]);
    }

    public function remove(Student $student): bool
    {
        $stmt = $this->connection->prepare('DELETE FROM students WHERE id = ?;');
        $stmt->bindValue(1, $student->getId(), PDO::PARAM_INT);

        return $stmt->execute();
    }
}