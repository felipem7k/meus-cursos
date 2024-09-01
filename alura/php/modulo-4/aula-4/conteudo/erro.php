<?php 

use ScreenMatch\Modelo\Genero;
use ScreenMatch\Modelo\Serie;
use ScreenMatch\Modelo\Episodio;
use ScreenMatch\Calculos\ConversorNotaEstrela;

require 'autoload.php';

$serie = new Serie('Lost', 2005, Genero::Drama, 10, 20, 30);

$episodio = new Episodio($serie, 'Episodio piloto', 1);

$conversor = new ConversorNotaEstrela();

echo $conversor->converte($episodio);