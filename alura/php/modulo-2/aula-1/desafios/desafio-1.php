<?php 
function operacaoMatematica(int $numero1, int $numero2, string $operacao): int {
    switch ($operacao) {
        case "+":
            return $numero1 + $numero2;
        break;
        case "-":
            return $numero1 - $numero2;
        break;
        case "*":
            return $numero1 * $numero2;
        break;
        case "/":
            return $numero1 / $numero2;
        break;
    }
}

$operacao = "+";
$numero1 = 7;
$numero2 = 5;
$resultado = operacaoMatematica($numero1, $numero2, $operacao);

echo "Números: $numero1, $numero2\n";
echo "Operação: $operacao\n";
echo "Resultado: $resultado\n";