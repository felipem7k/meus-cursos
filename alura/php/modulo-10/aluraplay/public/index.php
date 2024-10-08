<?php 

declare(strict_types= 1);

use Felipem7k\Aluraplay\Controller\Error404Controller;
use Nyholm\Psr7\Factory\Psr17Factory;
use Nyholm\Psr7Server\ServerRequestCreator;
use Psr\Container\ContainerInterface;

require_once __DIR__ ."/../vendor/autoload.php";

$routes = require_once __DIR__ ."/../config/routes.php";
/**
 * @var ContainerInterface $diContainer
 */
$diContainer = require_once __DIR__ ."/../config/dependencies.php";

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

$controller = $diContainer->get($controllerClass);

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