<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoListController implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        $videoList = $this->videoRepository->all();
        require_once __DIR__ ."/../../views/video-list.php";
    }
}