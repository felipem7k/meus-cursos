<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Entity\Video;
use Felipem7k\Aluraplay\Helper\FlashMessageTrait;
use Felipem7k\Aluraplay\Repository\VideoRepository;
use Nyholm\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class VideoEditController implements RequestHandlerInterface
{
    use FlashMessageTrait;
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $queryParams = $request->getQueryParams();
        $parseBody = $request->getParsedBody();

        $id = filter_var($queryParams["id"], FILTER_VALIDATE_INT);
        if (empty($id)) {
            $this->addErrorMessage("ID inválido.");
            return new Response(302, [
                "Location"=> "/"
            ]);
        }
        $url = filter_var($parseBody["url"], FILTER_VALIDATE_URL);
        if (empty($url)) {
            $this->addErrorMessage("URL inválida.");
            return new Response(302, [
                "Location"=> "/"
            ]);
        }
        $titulo = filter_var($parseBody["titulo"]);
        if (empty($titulo)) {
            $this->addErrorMessage("Título inválido.");
            return new Response(302, [
                "Location"=> "/"
            ]);
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
            $this->addErrorMessage("Ocorreu um erro no upload do arquivo. Tente novamente.");
            return new Response(302, [
                "Location"=> "/"
            ]);
        }
        
        return new Response(302, [
            "Location"=> "/"
        ]);
    }
}