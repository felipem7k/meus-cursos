<?php

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Controller;

use Nyholm\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class LogoutController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        session_destroy();

        return new Response(302, [
            "Location"=> "/login"
        ]);
    }
}