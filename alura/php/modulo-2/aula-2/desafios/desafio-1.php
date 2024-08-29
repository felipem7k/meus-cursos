<?php 
$notas = [1, 5, 2, 7, 3];

rsort($notas);

echo "As 3 maiores notas são: ";
for ($i = 0; $i < 3; $i++) {
    echo $notas[$i] . " ";
}