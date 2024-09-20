<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoFormController implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        $id = filter_input(INPUT_GET,"id", FILTER_VALIDATE_INT);
        $video = [
            'url' => '',
            'title'=> '',
        ];
    
        if (!empty($id)) {
            $video = $this->videoRepository->find(intval($id));
        }

        require_once __DIR__ .'/../../views/video-form.php';
    }
}
?>