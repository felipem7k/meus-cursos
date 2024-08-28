function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Desafio 1
        let resposta = prompt('Deseja realmente devolver o produto? (s/n)').toLowerCase();
        if (resposta !== "s" && resposta !== "sim") {
            alert('Ação cancelada.');
            return;
        }
        // 
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
    // Desafio 2
    let quantidadeAlugados = 0;
    for (let i = 1; i <= 3; i++) {
        let gameAtual = document.getElementById(`game-${i}`);
        let atualImagem = gameAtual.querySelector('.dashboard__item__img');
        if (atualImagem.classList.contains('dashboard__item__img--rented')) {
            quantidadeAlugados++;
        }
    }
    console.log(`${quantidadeAlugados} jogos alugados no total.`);
    // 
}

// Desafio 3
function checarPalindromo(str) {     
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}
let palavra = "radar"
console.log(`A palavra "${palavra}" ${checarPalindromo(palavra) ? "é" : "não é"} palíndromo.`)
// 

// Desafio 4
let listaDeNumeros = [3,2,6];
console.log(`${listaDeNumeros} em ordem crescente fica: ${listaDeNumeros.sort()}`);
// 