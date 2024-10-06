<?php

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Entity\Video;
use Felipem7k\Aluraplay\Repository\VideoRepository;
use Nyholm\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class JsonNewVideoController implements RequestHandlerInterface
{
    public function __construct(private VideoRepository $videoRepository)
    {

    }

    public function handle(ServerRequestInterface $request): ResponseInterface 
    {
        // getContents converte o body em string.
        $requestBodyContents = $request->getBody()->getContents();
        $videoData = json_decode($requestBodyContents, true);
        $video = new Video(
            $videoData["url"],
            $videoData["title"],
        );
        $this->videoRepository->add($video);

        return new Response(201, []);
    }
}
