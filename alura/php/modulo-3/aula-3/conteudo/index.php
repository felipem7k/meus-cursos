<?php 
require __DIR__ . "/src/Modelo/Filme.php";

echo "Bem vindo(a) ao ScreenMatch\n";

$filme = new Filme();
// $filme->nome = 'Thor - Ragnarok';
$filme->defineAnoLancamento(2021);
// $filme->genero = 'super-heroi';

$filme->avalia(10);
$filme->avalia(4);
$filme->avalia(5);
$filme->avalia(2.5);

var_dump($filme);

echo $filme->media() . "\n";

echo $filme->anoLancamento();