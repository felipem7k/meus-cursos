// Desafio 1
// function olaMundo() {
//     console.log("Olá, mundo!");
// }

// olaMundo();

// Desafio 2
// function mostrarNome() {
//     let nome = prompt('Qual é seu nome?');
//     console.log(`Olá, ${nome}!`);
// }
// mostrarNome();

// Desafio 3
// function calcularDobro(numero) {
//     return numero * 2;
// }
// let numero = parseInt(prompt('Digite um número'));
// let dobro = calcularDobro(numero);
// console.log(`O dobro de ${numero} é ${dobro}.`);

// Desafio 4
// function calcularMedia(numero1, numero2, numero3) {
//     return (numero1 + numero2 + numero3) / 3;
// }
// let numero1 = parseInt(prompt('Digite o primeiro número'));
// let numero2 = parseInt(prompt('Digite o segundo número'));
// let numero3 = parseInt(prompt('Digite o terceiro número'));
// let media = calcularMedia(numero1, numero2, numero3);
// console.log(`A média entre ${numero1}, ${numero2} e ${numero3} é ${media}`);

// Desafio 5
// function maiorNumero(numero1, numero2) {
//     if (numero1 > numero2) {
//         return numero1;
//     } else {
//         return numero2;
//     }
// }
// let numero1 = parseInt(prompt('Digite o primeiro número'));
// let numero2 = parseInt(prompt('Digite o segundo número'));
// let maior = maiorNumero(numero1, numero2);
// console.log(`O maior número entre ${numero1} e ${numero2} é ${maior}`);

// Desafio 6
function calcularRaizQuadrada(numero) {
    return numero * numero;
}
let numero = parseInt(prompt('Digite um número'));
let raiz = calcularRaizQuadrada(numero);
console.log(`A raiz quadrada de ${numero} é ${raiz}.`);