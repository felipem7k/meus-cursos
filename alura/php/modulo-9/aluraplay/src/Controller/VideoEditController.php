<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Entity\Video;
use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoEditController implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        $id = filter_input(INPUT_GET,"id", FILTER_VALIDATE_INT);
        if (empty($id)) {
            header("Location: /?sucesso=0");
            exit();
        }
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
        
        $video = new Video($url, $titulo);
        $video->setId($id);
        
        if ($_FILES["image"]["error"] === UPLOAD_ERR_OK) {
            $finfo = new \finfo(FILEINFO_MIME_TYPE);
            $mimeType = $finfo->file($_FILES["image"]["tmp_name"]);

            if (str_starts_with($mimeType,"image/")) {
                $fileName = uniqid('upload_') . pathinfo($_FILES["image"]["name"], PATHINFO_BASENAME);
                move_uploaded_file(
                    $_FILES["image"]["tmp_name"],
                    __DIR__ . '/../../public/img/uploads/' .  $fileName
                );
                $video->setFilePath($fileName);
            }
        }

        if ($this->videoRepository->update($video) == false) {
            header("Location: /?sucesso=0");
            exit();
        }
        
        header("Location: /?sucesso=1");
    }
}