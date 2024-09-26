<?php

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Controller\Controller;

class LogoutController implements Controller
{
    public function processaRequisicao(): void
    {
        session_destroy();
        header('Location: /login');
    }
}