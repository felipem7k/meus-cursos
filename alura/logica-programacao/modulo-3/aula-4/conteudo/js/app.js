let quantidadesIngressos = {
    'pista': 100,
    'superior': 200,
    'inferior': 400
}

function atualizarQuantidadeIngressos() {
    for (let tipo in quantidadesIngressos) {
        let lista = document.getElementById(`qtd-${tipo}`);
        lista.textContent = quantidadesIngressos[tipo];
    }
}

atualizarQuantidadeIngressos();

function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    // Desafio 1
    if (!quantidade) {
        alert('Quantidade inválida.');
        return;
    }
    // 

    if (!quantidadesIngressos[ingresso] || quantidadesIngressos[ingresso] < quantidade) {
        alert(`Quantidade indisponível para ${ingresso}.`);
        return;
    }

    quantidadesIngressos[ingresso] -= quantidade; 
    atualizarQuantidadeIngressos();
    alert('Compra realizada com sucesso!');
}

// Desafio 2
function retornarInteiro(numero) {
    return parseInt(numero);
}
let numero = "123";
console.log(retornarInteiro(numero));
// 

// Desafio 3
function somar(numero1, numero2) {
    return numero1 + numero2;
}
function subtrair(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
    
}
function dividir(numero1, numero2) {
    return numero1 / numero2;
}
let numero1 = 54;
let numero2 = 24;
let operacao = "/";
let resultado = 0;
if (operacao == "+") {
    resultado = somar(numero1, numero2);
} else if (operacao == "-") {
    resultado = subtrair(numero1, numero2);
} else if (operacao == "*") {
    resultado = multiplicar(numero1, numero2);
} else if (operacao == "/") {
    resultado = dividir(numero1, numero2);
}
console.log(`Operação: ${operacao}`);
console.log(`Resultado: ${resultado}`);
// 

// Desafio 4
function checarPar(valor) {
    return (valor % 2 == 0);
}
let valor = 8;
console.log(`O número ${valor} ${checarPar(valor) ? "é par." : "não é par."}`);
// 

// Desafio 5
function converterTemperatura(escala, temperatura) {
    if (escala == "c") {
        return (temperatura - 32) * 5 / 9;
    } else {
        return temperatura * 9 / 5 + 32;
    }
}
let temperatura = 30.0;
let escala = "f";
console.log(`Temperatura convertida: ${converterTemperatura(escala,temperatura)}`);
// 