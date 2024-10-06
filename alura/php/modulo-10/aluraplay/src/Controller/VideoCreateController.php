<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Entity\Video;
use Felipem7k\Aluraplay\Helper\FlashMessageTrait;
use Felipem7k\Aluraplay\Repository\VideoRepository;
use Nyholm\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\UploadedFileInterface;
use Psr\Http\Server\RequestHandlerInterface;

class VideoCreateController implements RequestHandlerInterface
{
    use FlashMessageTrait;
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $parsedBody = $request->getParsedBody();

        $url = filter_var($parsedBody["url"], FILTER_VALIDATE_URL);
        if (empty($url)) {
            $this->addErrorMessage("URL inválida.");
            return new Response(302, [
                "Location"=> "/novo-video",
            ]);
        }
        $titulo = filter_var($parsedBody["titulo"]);
        if (empty($titulo)) {
            $this->addErrorMessage("Título não informado.");
            return new Response(302, [
                "Location"=> "/novo-video",
            ]);
        }
        $video = new Video($url, $titulo);
        $files = $request->getUploadedFiles();
        /**
         * @var UploadedFileInterface $uploadedImage
         */
        $uploadedImage = $files["image"];
        if ($uploadedImage->getError() === UPLOAD_ERR_OK) {
            $finfo = new \finfo(FILEINFO_MIME_TYPE);
            $tmpFile = $uploadedImage->getStream()->getMetadata("uri");
            $mimeType = $finfo->file($tmpFile);

            if (str_starts_with($mimeType,"image/")) {
                $fileName = uniqid('upload_') . pathinfo($uploadedImage->getClientFilename(), PATHINFO_BASENAME);
                $uploadedImage->moveTo(__DIR__ . '/../../public/img/uploads/' .  $fileName);
                $video->setFilePath($fileName);
            }
        }

        if ($this->videoRepository->add($video) == false) {
            $this->addErrorMessage("Erro ao cadastrar vídeo.");
            return new Response(302, [
                "Location"=> "/",
            ]);
        }

        return new Response(302, [
            "Location"=> "/",
        ]);
    }
}