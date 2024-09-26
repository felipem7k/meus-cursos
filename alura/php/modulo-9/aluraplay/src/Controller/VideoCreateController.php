<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Entity\Video;
use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoCreateController implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        $url = filter_input(INPUT_POST,"url", FILTER_VALIDATE_URL);
        if (empty($url)) {
            header("Location: /?sucesso=0");
            exit();
        }
        $titulo = filter_input(INPUT_POST,"titulo");
        if (empty($titulo)) {
            header("Location: /?sucesso=0");
            exit();
        }
        if ($this->videoRepository->add(new Video($url, $titulo)) == false) {
            header("Location: /?sucesso=0");
            exit();
        }

        header("Location: /?sucesso=1");
    }
}