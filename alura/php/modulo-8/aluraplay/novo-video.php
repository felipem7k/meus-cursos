<?php

use Felipem7k\Aluraplay\Entity\Video;
use Felipem7k\Aluraplay\Repository\VideoRepository;

$dbPath = __DIR__ ."/banco.sqlite";
$pdo = new PDO("sqlite:$dbPath");

$url = filter_input(INPUT_POST,"url", FILTER_VALIDATE_URL);
if (empty($url)) {
    header("Location: /?sucesso=0");
    exit();
}
$titulo = filter_input(INPUT_POST,"titulo");
if (empty($titulo)) {
    header("Location: /?sucesso=0");
    exit();
}

$repository = new VideoRepository($pdo);

if ($repository->add(new Video($url, $titulo)) == false) {
    header("Location: /?sucesso=0");
    exit();
}

header("Location: /?sucesso=1");
