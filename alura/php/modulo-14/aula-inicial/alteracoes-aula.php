<?php

require_once __DIR__ ."/Curso.php";

$curso = new Curso("Collections com PHP");

$curso->adicionaAlteracao("Primeira aula criada");
$curso->adicionaAlteracao("Segunda aula modificada");
$curso->adicionaAlteracao("Terceira aula concluida");

foreach($curso->recuperaAlteracoes() as $alteracao) {
    echo $alteracao . PHP_EOL;
}

$curso->adicionaAlunoParaEspera("Felipe Machado");
$curso->adicionaAlunoParaEspera("Henrique Juliano");
$curso->adicionaAlunoParaEspera("Matheus Kauan");

foreach($curso->recuperaAlunosEmEspera() as $aluno) {
    echo $aluno . PHP_EOL;
}