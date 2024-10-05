<?php

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Controller;

// classes abstratas não podem ser instanciadas
abstract class ControllerWithHtml
{
    private const TEMPLATE_PATH = __DIR__ .'/../../views/';

    // protected faz com que a função só possa ser executada por uma classe que extendeu a função
    protected function renderTemplate(string $templateName, array $context = []): string
    {
        extract($context);

        ob_start();
        require_once self::TEMPLATE_PATH . $templateName;
        return ob_get_clean();
    }
}