<?php 
$notas = [5, 7, 8, 4, 10, 6];

foreach ($notas as $nota) {
    if ($nota > 6) {
        echo "Nota: $nota - Aluno aprovado\n";
    } else {
        echo "Nota: $nota - Aluno reprovado\n";
    }
};