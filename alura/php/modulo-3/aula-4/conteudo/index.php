<?php 
require __DIR__ . "/src/Modelo/Genero.php";
require __DIR__ . "/src/Modelo/Titulo.php";
require __DIR__ . "/src/Modelo/Filme.php";
require __DIR__ . "/src/Modelo/Serie.php";

echo "Bem vindo(a) ao ScreenMatch\n";

$filme = new Filme(
    'Thor - Ragnarok',
    2021,
    Genero::SuperHeroi,
    180,
);

$filme->avalia(10);
$filme->avalia(4);
$filme->avalia(5);
$filme->avalia(2.5);

var_dump($filme);

echo $filme->media() . "\n";

echo $filme->anoLancamento . "\n";

$serie = new Serie(
    'Lost',
    2005,
    Genero::Drama,
    10,
    20,
    30,
);

echo $serie->anoLancamento . "\n";

$serie->avalia(5);

echo $serie->media() . "\n";