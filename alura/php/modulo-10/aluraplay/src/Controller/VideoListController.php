<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Controller\ControllerWithHtml;
use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoListController extends ControllerWithHtml implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        $videoList = $this->videoRepository->all();

        echo $this->renderTemplate("video-list.php", [
            'videoList' => $videoList
        ]);
    }
}