<?php

require_once __DIR__ ."/Curso.php";
require_once __DIR__ ."/Aluno.php";

$curso = new Curso("Collections com PHP");

$curso->adicionaAlteracao("Primeira aula criada");
$curso->adicionaAlteracao("Segunda aula modificada");
$curso->adicionaAlteracao("Terceira aula concluida");

foreach($curso->recuperaAlteracoes() as $alteracao) {
    echo $alteracao . PHP_EOL;
}

$felipe = new Aluno("Felipe Machado");

$curso->adicionaAlunoParaEspera($felipe);
$curso->adicionaAlunoParaEspera(new Aluno("Henrique Juliano"));
$curso->adicionaAlunoParaEspera(new Aluno("Matheus Kauan"));

foreach($curso->recuperaAlunosEmEspera() as $aluno) {
    echo $aluno->nome . PHP_EOL;
}

$curso->matricularAluno($felipe);
$curso->matricularAluno(new Aluno("Henrique Juliano"));
$curso->matricularAluno($felipe);

echo "-------------" . PHP_EOL;

foreach ($curso->recuperaAlunosMatriculados() as $aluno) {
    echo $aluno->nome . PHP_EOL;
}
