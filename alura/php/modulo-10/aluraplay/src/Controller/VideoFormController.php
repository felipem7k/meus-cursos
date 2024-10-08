<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Helper\HtmlRendererTrait;
use Felipem7k\Aluraplay\Repository\VideoRepository;
use League\Plates\Engine;
use Nyholm\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class VideoFormController implements RequestHandlerInterface
{
    public function __construct(
        private VideoRepository $videoRepository,
        private Engine $templates,
    )
    {
    }
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $queryParams = $request->getQueryParams();

        $id = filter_var($queryParams["id"] ?? "", FILTER_VALIDATE_INT);
        $video = null;
    
        if (!empty($id)) {
            $video = $this->videoRepository->find(intval($id));
        }

        return new Response(200, [], $this->templates->render("video-form", [
            "video"=> $video,
            "id"=> $id,
        ]));
    }
}
