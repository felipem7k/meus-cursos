// Desafio 1
let numero = 2;
if (numero == 0) {
    console.log('Você digitou o número 0.');
} else {
    let texto = numero > 0 ? "positivo" : "negativo";
    console.log(`Você digitou um número ${texto}.`);
}

// Desafio 2
let idade = 17;
let maiorDeIdade = idade >= 18 ? "maior" : "menor";
console.log(`Você é ${maiorDeIdade} de idade.`);

// Desafio 3
function stringVazia(str) {
    return str == '';
}
let texto = 'teste';
console.log(`A string "${texto}" ${stringVazia(texto) ? "é" : "não é"} vazia.`);

// Desafio 4
function anoBissexto(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
let ano = 2024;
console.log(`O ano de ${ano} ${anoBissexto(ano) ? "é" : "não é"} bissexto.`);

// Desafio 5
function calcularMedia(numero1, numero2) {
    if (typeof numero1 !== "number" || numero1 == 0) {
        console.log(`Impossivel calcular a média. Primeiro valor passado inválido.`)
        return;
    }
    if (typeof numero2 !== "number" || numero2 == 0) {
        console.log(`Impossivel calcular a média. Segundo valor passado inválido.`)
        return;
    }
    console.log(`A média entre ${numero1} e ${numero2} é ${(numero1 + numero2) / 2}`)
}

calcularMedia(2,6);

// Desafio 6
function tamanhoArray(arr) {
    console.log(`O tamanho da array é de ${arr.length} itens.`);
}
tamanhoArray([23,543,67,234,54]);

// Desafio 7
let frutaDesejada = "Limao";
let frutas = ["Maça","Banana","Pera"];
console.log(`A fruta desejada ${!frutas.includes(frutaDesejada) ? "não " : ""}foi encontrada na array de frutas.`);

// Desafio 8
function estaPresente(alvo,arr) {
    console.log(`A fruta desejada ${!arr.includes(alvo) ? "não " : ""}foi encontrada na cesta.`);
}
let frutaDesejadaCesta = "Abacate";
let cesta = ["Abacate","Banana","Pera"];
estaPresente(frutaDesejadaCesta,cesta)

// Desafio 9
let stringAlvo = "Porta";
let stringsLista = ["Mesa","Cadeira","Prato"];
console.log(`A string ${!stringsLista.includes(stringAlvo) ? "não " : ""}foi encontrada na array.`);

// Desafio 10
function verificarEstudantes(alvo,arr) {
    console.log(`O aluno ${!arr.includes(alvo) ? "não " : ""}foi encontrado(a).`);
}
let estudanteDesejado = "Pedro";
let listaEstudantes = ["Pedro","Paulo","Ana"];
verificarEstudantes(estudanteDesejado,listaEstudantes)

// Desafio 11
function processArray(numbers) {
    let sumEven = 0;
    let productOdd = 1;

    numbers.forEach(number => {
        if (number % 2 === 0) {
            sumEven += number;
        } else {
            productOdd *= number;
        }
    });

    return {
        sumEven: sumEven,
        productOdd: productOdd
    };
}

let numeros = [1, 2, 3, 4, 5, 6];
let resultado = processArray(numeros);

console.log(`Soma dos elementos pares: ${resultado.sumEven}`); 
console.log(`Produto dos elementos ímpares: ${resultado.productOdd}`); 
