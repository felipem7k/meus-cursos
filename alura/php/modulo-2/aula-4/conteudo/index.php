<?php 
require __DIR__ . "/src/funcoes.php";

echo "Bem=vindo(a) ao screen match!
";

$nomeFilme = "Top Gun - Maverick";
$nomeFilme = "Se beber não case";
$nomeFilme = "Thor: Ragnarok"; 

$anoLancamento = 2022;

$quantidadeDeNotas = $argc - 1;
$notas = [];

for ($contador = 1; $contador <= $quantidadeDeNotas; $contador++) {
    $notas[] = (float) $argv[$contador]; // ÚTIL: Para adicionar elemento ao FIM do array, não é necessário indicar o índice.
}

// $somaDeNotas = 0;
// foreach ($notas as $nota) {
//     $somaDeNotas += $nota;
// }

// $contador = 1;
// while ($argv[$contador] != 0) {
//     $somaDeNotas += $argv[$contador++]; // ÚTIL: O contador será aumentado DEPOIS de ser adicionado.
// }

// do {
//
// } while ($condition);


$notaFilme = array_sum($notas) / $quantidadeDeNotas;

$planoPrime = true;
$incluidoNoPlano = incluidoNoPlano($planoPrime, $anoLancamento);

echo "Nome do filme: " . $nomeFilme . "\n";
echo "Nota do filme: $notaFilme\n";
echo "Ano de lançamento: $anoLancamento\n";

exibeMensagemLancamento($anoLancamento);

$genero = match ($nomeFilme) {
    "Top Gun - Maverick" => "ação",
    "Thor: Ragnarok" => "super-herói",
    "Se beber não case" => "comédia",
    default => "gênero desconhecido",
};

echo "O gênero do filme é: $genero.\n";

$filme = criaFilme(
    nome: "Thor: Ragnarok", 
    anoLancamento: 2021, 
    nota: 7.8, 
    genero: "super-herói"
);

echo $filme["nome"];

var_dump($notas);
sort($notas);
var_dump($notas);
var_dump(min($notas));

$posicaoDoisPontos = strpos($filme['nome'], ':');
var_dump(substr($filme['nome'], 0, $posicaoDoisPontos));

$filmeComoStringJson = json_encode($filme);
file_put_contents(__DIR__ . "/filme.json", $filmeComoStringJson);