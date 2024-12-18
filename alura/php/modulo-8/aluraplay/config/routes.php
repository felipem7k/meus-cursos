<?php 

declare(strict_types=1);

use Felipem7k\Aluraplay\Controller\VideoCreateController;
use Felipem7k\Aluraplay\Controller\VideoEditController;
use Felipem7k\Aluraplay\Controller\VideoFormController;
use Felipem7k\Aluraplay\Controller\VideoListController;
use Felipem7k\Aluraplay\Controller\VideoRemoveController;

return [
    "GET|/"=> VideoListController::class,
    "GET|/novo-video"=> VideoFormController::class,
    "POST|/novo-video"=> VideoCreateController::class,
    "GET|/editar-video"=> VideoFormController::class,
    "POST|/editar-video"=> VideoEditController::class,
    "GET|/remover-video"=> VideoRemoveController::class,
];