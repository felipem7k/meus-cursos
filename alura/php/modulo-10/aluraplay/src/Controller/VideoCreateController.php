<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Entity\Video;
use Felipem7k\Aluraplay\Helper\FlashMessageTrait;
use Felipem7k\Aluraplay\Repository\VideoRepository;

class VideoCreateController implements Controller
{
    use FlashMessageTrait;
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function processaRequisicao(): void
    {
        $url = filter_input(INPUT_POST,"url", FILTER_VALIDATE_URL);
        if (empty($url)) {
            $this->addErrorMessage("URL inválida.");
            header("Location: /novo-video");
            exit();
        }
        $titulo = filter_input(INPUT_POST,"titulo");
        if (empty($titulo)) {
            $this->addErrorMessage("Título não informado.");
            header("Location: /novo-video");
            exit();
        }
        $video = new Video($url, $titulo);
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

        if ($this->videoRepository->add($video) == false) {
            $this->addErrorMessage("Erro ao cadastrar vídeo.");
            header("Location: /");
            exit();
        }

        header("Location: /");
    }
}