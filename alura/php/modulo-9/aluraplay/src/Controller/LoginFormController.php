<?php

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Controller;

class LoginFormController implements Controller
{
    public function processaRequisicao(): void
    {
        if (array_key_exists('logado', $_SESSION) && $_SESSION['logado'] === true) {
            header("Location: /");
            exit;
        }
        require_once __DIR__ . "/../../views/login-form.php";
    }
}