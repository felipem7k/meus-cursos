// Desafio 1
// function calcularImc(peso, altura) {
//     return peso / (altura * altura);
// }
// let peso = parseFloat(prompt('Seu peso: (Ex.: 50,0)'));
// let altura = parseInt(prompt('Sua altura: (Ex.: 167)'));
// let imc = calcularImc(peso, altura / 100);
// alert(`Seu IMC é de ${imc.toFixed(1)} Kg/m2`);

// Desafio 2
// function fatorializar(numero) {
//     var resposta = numero;
//     if (numero === 0 || numero === 1) 
//       return 1; 
//     while (numero > 1) { 
//       numero--;
//       resposta *= numero;
//     }
//     return resposta;
// }
// let numero = parseInt(prompt('Digite um número:'));
// let fatorializado = fatorializar(numero);
// alert(fatorializado);

// Desafio 3
// let dolarAtual = 4.80;
// function converterParaDolar(valor) {
//     return valor / dolarAtual;
// }
// let valor = parseFloat(prompt('Valor:'));
// let dolar = converterParaDolar(valor);
// alert(`R$ ${valor.toFixed(2)} convertido em dólar, fica $ ${dolar.toFixed(2)}, considerando a cotação do dólar igual a R$ ${dolarAtual.toFixed(2)}.`);

// Desafio 4
// function calcularPerimetro(altura, largura) {
//     return 2 * (altura + largura);
// }
// let altura = parseInt(prompt('Altura da sala:'));
// let largura = parseInt(prompt('Largura da sala:'));
// let perimetro = calcularPerimetro(altura, largura);
// alert(`O perímetro é de ${perimetro} cm`);

// Desafio 5
// function calcularAreaPerimetroSalaCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
    
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//   }
// let raio = parseInt(prompt('Raio da sala:'));
// calcularAreaPerimetroSalaCircular(raio);

// Desafio 6 
function calcularTabuada(numero) {
    let textoTabuada = '';
    let numeroAtual = 1;
    while (numeroAtual <= 10) {
        textoTabuada += `\n${numero} x ${numeroAtual} = ${numero * numeroAtual}`;
        numeroAtual++;
    }
    return textoTabuada;
}
let numero = parseInt(prompt('Digite um número'));
let tabuada = calcularTabuada(numero); 
alert(`A tabuada de ${numero} é ${tabuada}`);