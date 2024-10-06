<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Helper\HtmlRendererTrait;
use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoFormController extends ControllerWithHtml implements Controller
{
    use HtmlRendererTrait;
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