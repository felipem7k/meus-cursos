<?php 
function celsiusParaFahrenheit(float $celsius): float {
    return ($celsius * 1.8) + 32;
}

$celsius = 30.0;
$fahrenheit = celsiusParaFahrenheit($celsius);

echo "$celsius graus Celsius são $fahrenheit graus Fahrenheit.";