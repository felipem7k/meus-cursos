<?php

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Entity\Video;
use Felipem7k\Aluraplay\Repository\VideoRepository;

class JsonNewVideoController implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {

    }

    public function processaRequisicao(): void
    {
        $request = file_get_contents("php://input");
        $videoData = json_decode($request, true);
        $video = new Video(
            $videoData["url"],
            $videoData["title"],
        );
        $this->videoRepository->add($video);

        http_response_code(201);
    }
}
