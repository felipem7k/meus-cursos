<?php
$string = "Vinicius Dias,1997,Programador";

// Transforma a string em um array usando a vírgula como delimitador
$array = explode(",", $string);

// Exibe o array resultante
print_r($array);