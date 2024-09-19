<?php 

use Felipem7k\Aluraplay\Repository\VideoRepository;

$dbPath = __DIR__ ."/banco.sqlite";
$pdo = new PDO("sqlite:$dbPath");

$id = $_GET["id"];

$repository = new VideoRepository($pdo);

if ($repository->remove($id) == false) {
    header("Location: /?sucesso=0");
    exit();
}

header("Location: /?sucesso=1");