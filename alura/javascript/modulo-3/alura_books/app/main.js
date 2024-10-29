let livros = [];

const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

buscarLivros()

async function buscarLivros() {
    const resposta = await fetch(endpoint);
    livros = await resposta.json();
    const livrosComDesconto = calcularDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}