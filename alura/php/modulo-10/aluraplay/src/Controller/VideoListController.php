<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Helper\HtmlRendererTrait;
use Felipem7k\Aluraplay\Repository\VideoRepository;
use Nyholm\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class VideoListController implements RequestHandlerInterface
{
    use HtmlRendererTrait;
    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $videoList = $this->videoRepository->all();

        return new Response(200, [], $this->renderTemplate("video-list.php", [
            'videoList' => $videoList
        ]));
    }
}