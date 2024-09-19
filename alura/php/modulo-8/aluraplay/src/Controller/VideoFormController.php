<?php 

namespace Felipem7k\Aluraplay\Controller;

use Felipem7k\Aluraplay\Repository\VideoRepository;
use \PDO;

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

        require_once __DIR__ . '/../../inicio-html.php'; 
        
        ?>
        <main class="container">
        
            <form class="container__formulario" method="post" 
            action="<?= empty($id) ? "/novo-video" : "/editar-video?id=$id" ?>">
                <h2 class="formulario__titulo">Envie um vídeo!</h2>
                    <div class="formulario__campo">
                        <label class="campo__etiqueta" for="url">Link embed</label>
                        <input name="url" 
                        value="<?= $video->url; ?>"
                        class="campo__escrita" 
                        required
                        placeholder="Por exemplo: https://www.youtube.com/embed/FAY1K2aUg5g" 
                        id='url' />
                    </div>
        
        
                    <div class="formulario__campo">
                        <label 
                        class="campo__etiqueta" 
                        for="titulo">Titulo do vídeo
                        </label>
                        <input 
                        name="titulo" 
                        value="<?= $video->title; ?>"
                        class="campo__escrita" 
                        required 
                        placeholder="Neste campo, dê o nome do vídeo"
                        id='titulo' 
                        />
                    </div>
        
                    <input class="formulario__botao" type="submit" value="Enviar" />
            </form>
        
        </main>
        <?php require_once __DIR__ . '/../../fim-html.php'; 
    }
}
?>