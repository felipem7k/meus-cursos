<?php 

echo "Bem=vindo(a) ao screen match!
";

$nomeFilme = "Top Gun - Maverick";
$nomeFilme = "Se beber não case";
$nomeFilme = "Thor: Ragnarok"; 

$anoLancamento = 2022;

$quantidadeDeNotas = $argc - 1;
$somaDeNotas = 0;

for ($contador = 1; $contador <= $quantidadeDeNotas; $contador++) {
    $somaDeNotas += $argv[$contador];
}

// $contador = 1;
// while ($argv[$contador] != 0) {
//     $somaDeNotas += $argv[$contador++]; // ÚTIL: O contador será aumentado DEPOIS de ser adicionado.
// }

// do {
//
// } while ($condition);


$notaFilme = $somaDeNotas / $quantidadeDeNotas;

$planoPrime = true;
$incluidoNoPlano = $planoPrime || $anoLancamento < 2020;

echo "Nome do filme: " . $nomeFilme . "\n";
echo "Nota do filme: $notaFilme\n";
echo "Ano de lançamento: $anoLancamento\n";

if ($anoLancamento > 2022) {
    echo "Esse filme é um lançamento.\n";
} elseif ($anoLancamento > 2020 && $anoLancamento <= 2022) {
    echo "Esse filme ainda é novo.\n";
} else {
    echo "Esse filme não é um lançamento.\n";
}

$genero = match ($nomeFilme) {
    "Top Gun - Maverick" => "ação",
    "Thor: Ragnarok" => "super-herói",
    "Se beber não case" => "comédia",
    default => "gênero desconhecido",
};

echo "O gênero do filme é: $genero.\n";

echo $argc;