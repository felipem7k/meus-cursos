<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Helper\HtmlRendererTrait;
use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoListController implements Controller
{
    use HtmlRendererTrait;
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