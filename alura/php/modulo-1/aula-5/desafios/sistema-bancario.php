<?php

$dados = [
    "titular" => "Felipe Machado",
    "saldo" => 1000,
];

echo "****************\n";
echo "Titular: {$dados['titular']}\n";
echo "Saldo atual: R$ {$dados['saldo']}\n";
echo "****************\n";

do {
    echo "1. Consultar saldo atual\n";
    echo "2. Sacar valor\n";
    echo "3. Depositar valor\n";
    echo "4. Sair\n";
    $numero = (float) fgets(STDIN);
    switch ($numero) {
        case 1:
            echo "Saldo atual: R$ {$dados['saldo']}.\n";
        break;
        case 2:
            echo "Qual valor deseja sacar?\n";
            $valor = (float) fgets(STDIN);
            if ($dados['saldo'] >= $valor) {
                $dados['saldo'] -= $valor;
                echo "Saque efetuado com sucesso.\n";
            } else {
                echo "Saldo insuficiente.\n";
            }
        break;
        case 3:
            echo "Qual valor deseja depositar?\n";
            $valor = (float) fgets(STDIN);
            $dados['saldo'] += $valor;
            echo "Depósito efetuado com sucesso.\n";
        break;
        default:
            echo "Valor inválido.\n";
        break;
    }
} while($numero != 4);
echo "Adeus.\n";