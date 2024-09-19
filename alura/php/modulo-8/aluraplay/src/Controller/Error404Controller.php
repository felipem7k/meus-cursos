<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Repository\VideoRepository;

class Error404Controller implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        http_response_code(404);
    }
}