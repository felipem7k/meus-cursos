<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Helper\FlashMessageTrait;
use Felipem7k\Aluraplay\Repository\VideoRepository;
use Nyholm\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class VideoRemoveController implements RequestHandlerInterface
{
    use FlashMessageTrait;

    public function __construct(private VideoRepository $videoRepository)
    {
    }
    public function handle(ServerRequestInterface $request): ResponseInterface
    {

        $queryParams = $request->getQueryParams();
        $id = filter_var($queryParams["id"], FILTER_VALIDATE_INT);

        if (empty($id)) {
            $this->addErrorMessage("ID inválido.");
            return new Response(302, [
                'Location' => '/'
            ]);
        }

        if ($this->videoRepository->remove($id) == false) {
            $this->addErrorMessage("Erro ao remover vídeo.");
            return new Response(302, [
                'Location' => '/'
            ]);
        }
        
        return new Response(302, [
            'Location' => '/'
        ]);
    }
}