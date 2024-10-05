<?php

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Controller;
use Felipem7k\Aluraplay\Controller\ControllerWithHtml;

class LoginFormController extends ControllerWithHtml implements Controller
{
    public function processaRequisicao(): void
    {
        if (array_key_exists('logado', $_SESSION) && $_SESSION['logado'] === true) {
            header("Location: /");
            exit;
        }

        echo $this->renderTemplate("login-form.php");
    }
}