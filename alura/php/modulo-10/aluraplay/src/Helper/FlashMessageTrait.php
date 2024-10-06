<?php

declare(strict_types= 1);

namespace Felipem7k\Aluraplay\Helper;

trait FlashMessageTrait
{
    public function addErrorMessage(string $errorMessage): void
    {
        $_SESSION["error_message"] = $errorMessage;
    }
}