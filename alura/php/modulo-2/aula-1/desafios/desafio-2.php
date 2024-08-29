<?php
function calcularImc(float $altura, float $peso): float {
    return $peso / ($altura * $altura);
}

$altura = 1.67;
$peso = 50.0;
$imc =  calcularImc($altura, $peso);
echo "Seu IMC é de $imc kg/m2";