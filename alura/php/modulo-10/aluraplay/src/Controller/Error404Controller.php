<?php 

namespace Felipem7k\Aluraplay\Controller;

use Nyholm\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class Error404Controller implements RequestHandlerInterface
{
    public function __construct()
    {
    }
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        return new Response(404, []);
    }
}