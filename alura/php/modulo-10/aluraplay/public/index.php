<?php 

declare(strict_types= 1);

use Felipem7k\Aluraplay\Controller\Error404Controller;
use Felipem7k\Aluraplay\Repository\VideoRepository;
use Nyholm\Psr7\Factory\Psr17Factory;
use Nyholm\Psr7Server\ServerRequestCreator;

require_once __DIR__ ."/../vendor/autoload.php";

$dbPath = __DIR__ ."/../banco.sqlite";
$pdo = new \PDO("sqlite:$dbPath");
$videoRepository = new VideoRepository($pdo);

$routes = require_once __DIR__ ."/../config/routes.php";
$pathInfo = $_SERVER["PATH_INFO"] ?? "/";
$httpMethod = $_SERVER['REQUEST_METHOD'];

session_start();
if (isset($_SESSION['logado'])) {
    $originalInfo = $_SESSION['logado'];
    unset($_SESSION['logado']);
    session_regenerate_id();
    $_SESSION['logado'] = $originalInfo;
}
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

$psr17Factory = new Psr17Factory();

$creator = new ServerRequestCreator(
    $psr17Factory,
    $psr17Factory,
    $psr17Factory,
    $psr17Factory,
);

$request = $creator->fromGlobals();

$response = $controller->handle($request);

http_response_code($response->getStatusCode());

foreach ($response->getHeaders() as $name => $values) {
    foreach ($values as $value) {  
        header(sprintf("%s: %s", $name, $value), false);
    }
}

echo $response->getBody();