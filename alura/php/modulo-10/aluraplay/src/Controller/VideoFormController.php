<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Controller\ControllerWithHtml;
use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoFormController extends ControllerWithHtml implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        $id = filter_input(INPUT_GET,"id", FILTER_VALIDATE_INT);
        $video = null;
    
        if (!empty($id)) {
            $video = $this->videoRepository->find(intval($id));
        }

        echo $this->renderTemplate("video-form.php", [
            "video"=> $video
        ]);
    }
}
?>