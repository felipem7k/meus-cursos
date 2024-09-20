<?php 

namespace Felipem7k\Aluraplay\Controller;

class Error404Controller implements Controller
{
    public function __construct()
    {
    }
    public function processaRequisicao(): void
    {
        http_response_code(404);
    }
}