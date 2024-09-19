<?php 

declare(strict_types= 1);

use Felipem7k\Aluraplay\Controller\{
    Error404Controller,
    VideoCreateController,
    VideoEditController,
    VideoFormController,
    VideoListController,
    VideoRemoveController
};

use Felipem7k\Aluraplay\Repository\VideoRepository;

require_once __DIR__ ."/../vendor/autoload.php";

$dbPath = __DIR__ ."/../banco.sqlite";
$pdo = new \PDO("sqlite:$dbPath");
$videoRepository = new VideoRepository($pdo);

if (!array_key_exists("PATH_INFO", $_SERVER) || $_SERVER["PATH_INFO"] === '/') {
    $controller = new VideoListController($videoRepository);
} else if ($_SERVER["PATH_INFO"] === '/novo-video') {
    if ($_SERVER['REQUEST_METHOD'] === "GET") {
        $controller = new VideoFormController($videoRepository);
    } else if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $controller = new VideoCreateController($videoRepository);
    }
} else if ($_SERVER["PATH_INFO"] === '/editar-video') {
    if ($_SERVER['REQUEST_METHOD'] === "GET") {
        $controller = new VideoFormController($videoRepository);
    } else if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $controller = new VideoEditController($videoRepository);
    }
} else if ($_SERVER["PATH_INFO"] === '/remover-video') {
    $controller = new VideoRemoveController($videoRepository);
} else {
    $controller = new Error404Controller($videoRepository);
}
$controller->processaRequisicao();
