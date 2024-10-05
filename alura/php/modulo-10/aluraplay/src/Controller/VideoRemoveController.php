<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoRemoveController implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        $id = $_GET["id"];

        if ($this->videoRepository->remove($id) == false) {
            header("Location: /?sucesso=0");
            exit();
        }
        
        header("Location: /?sucesso=1");
    }
}