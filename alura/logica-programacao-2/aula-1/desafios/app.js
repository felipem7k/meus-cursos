// Desafio 2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Desafio 3 
function mensagemConsole() {
    console.log('O botão foi clicado');
}

// Desafio 4
function mensagemAlerta() {
    alert('Eu amo JS');
}

// Desafio 5
function abrirPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

// Desafio 6
function somarNumeros() {
    let valor1 = parseInt(prompt('Digite um número inteiro:'));
    let valor2 = parseInt(prompt('Digite outro número inteiro:'));
    alert(`A soma entre ${valor1} e ${valor2} é ${valor1 + valor2}`);
}