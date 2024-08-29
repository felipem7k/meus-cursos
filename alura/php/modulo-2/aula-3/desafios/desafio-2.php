<?php
$arquivo = fopen(__DIR__ . "/teste.txt", "a");

if ($arquivo) {
    $primeiraLinha = fwrite($arquivo, "PHP é incrível!\n");
    fclose($arquivo);

    echo "Frase adicionada com sucesso!.\n";
} else {
    echo "Erro ao abrir o arquivo.\n";
}