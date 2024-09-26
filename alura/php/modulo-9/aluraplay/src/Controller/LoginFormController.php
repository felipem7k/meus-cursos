<?php

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Controller;

class LoginFormController implements Controller
{
    public function processaRequisicao(): void
    {
        require_once __DIR__ . "/../../views/login-form.php";
    }
}