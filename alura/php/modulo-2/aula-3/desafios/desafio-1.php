<?php 
$arquivo = fopen(__DIR__ . "/teste.txt", "r");

if ($arquivo) {
    $primeiraLinha = fgets($arquivo);
    echo $primeiraLinha;
    fclose($arquivo);
} else {
    echo "Erro ao abrir o arquivo.";
}