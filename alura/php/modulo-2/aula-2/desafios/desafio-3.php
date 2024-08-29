<?php 
function ordenarArrayAlfabeticamente($array) {
    sort($array);
    
    return $array;
}

$nomes = ["Vinicius", "Ana", "Carlos", "Beatriz"];
$nomesOrdenados = ordenarArrayAlfabeticamente($nomes);

print_r($nomesOrdenados);