<?php 

use ScreenMatch\Modelo\Genero;
use ScreenMatch\Modelo\Serie;
use ScreenMatch\Modelo\Episodio;
use ScreenMatch\Calculos\ConversorNotaEstrela;
use ScreenMatch\Exception\NotaInvalidaException;

require 'autoload.php';

$serie = new Serie('Lost', 2005, Genero::Drama, 10, 20, 30);

$episodio = new Episodio($serie, 'Episodio piloto', 1);

try {
    $episodio->avalia(45);
    $episodio->avalia(-5);

    $conversor = new ConversorNotaEstrela();

    echo $conversor->converte($episodio);
} catch (NotaInvalidaException $e) {
    echo "ERRO: " . $e->getMessage() . PHP_EOL;
}