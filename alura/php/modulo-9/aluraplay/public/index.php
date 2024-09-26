<?php 

declare(strict_types= 1);

use Felipem7k\Aluraplay\Controller\Error404Controller;

use Felipem7k\Aluraplay\Repository\VideoRepository;

require_once __DIR__ ."/../vendor/autoload.php";

$dbPath = __DIR__ ."/../banco.sqlite";
$pdo = new \PDO("sqlite:$dbPath");
$videoRepository = new VideoRepository($pdo);

$routes = require_once __DIR__ ."/../config/routes.php";
$pathInfo = $_SERVER["PATH_INFO"] ?? "/";
$httpMethod = $_SERVER['REQUEST_METHOD'];

session_start();
$isLoginRoute = $pathInfo === '/login';
if (!array_key_exists('logado', $_SESSION) && !$isLoginRoute) {
    header("Location: /login");
    exit;
}

$key = "$httpMethod|$pathInfo";
if (array_key_exists($key, $routes)) {
    $controllerClass = $routes[$key];
} else {
    $controllerClass = Error404Controller::class;
}

$controller = new $controllerClass($videoRepository);

$controller->processaRequisicao();
