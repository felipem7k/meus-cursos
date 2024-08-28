let listaDeNomes = [];

function obterNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function atualizarNomes() {
    let nomesSpan = ''
    for (let index in listaDeNomes) {
        nomesSpan += `<span onclick="removerMembro('${listaDeNomes[index]}')">${listaDeNomes[index]}</span>${index == listaDeNomes.length - 1 ? "" : ", "}`
    }
    document.getElementById('lista-amigos').innerHTML = nomesSpan;
}

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;

    if (nome == "") {
        alert('Digite um nome.');
        return;
    }

    if (listaDeNomes.includes(nome)) {
        alert('Esta pessoa já foi adicionada na lista.');
        return;
    }

    listaDeNomes.push(nome);
    document.getElementById('nome-amigo').value = '';
    atualizarNomes();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    let texto = '';
    embaralha(listaDeNomes)

    for (let index in listaDeNomes) {
        let usuarioAlvo = index - 1
        if (usuarioAlvo < 0) {
            usuarioAlvo = listaDeNomes.length - 1
        }
        texto += `<br> ${listaDeNomes[index]}  ➜ ${listaDeNomes[usuarioAlvo]}`;
    }

    document.getElementById('lista-sorteio').innerHTML = texto;
    document.getElementById('nome-amigo').value = '';
}

function reiniciar() {
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').value = '';
    listaDeNomes = [];
}

// Desafio 1
function removerMembro(nome) {
    if (!listaDeNomes.includes(nome)) {
        alert('Nome não encontrado.');
        return;
    }
    listaDeNomes = listaDeNomes.filter(element => element !== nome);
    atualizarNomes();
    alert(`${nome} removido.`);
}
// 

// Desafio 2
let minhaLista = [1,2,3];
let outraLista = [4,5,6];
let novaLista = minhaLista.concat(outraLista);
console.log(novaLista);
// 

// Desafio 3
novaLista.pop();
console.log(novaLista);
// 

// Desafio 4
embaralha(novaLista);
console.log(novaLista);
// 

// Desafio 5
function removerDuplicatas(array) {
    return [...new Set(array)];
}
novaLista.push(34);
novaLista.push(23);
novaLista.push(24);
novaLista.push(24);
novaLista.push(24);
novaLista = removerDuplicatas(novaLista);
console.log(novaLista);
//