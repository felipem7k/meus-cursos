<?php 
$horario = 7;

if ($horario < 12) {
    echo "Bom dia";
} elseif ($horario < 18) {
    echo "Boa tarde";
} else {
    echo "Boa noite";
}