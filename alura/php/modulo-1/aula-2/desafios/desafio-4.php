<?php

$ano = 2024;
$bissexto= date('L', mktime(0, 0, 0, 1, 1, $ano));
echo $ano . ' ' . ($bissexto? 'é' : 'não é') . ' um ano bissexto.';