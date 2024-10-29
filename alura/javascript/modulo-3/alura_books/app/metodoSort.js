const botao = document.getElementById('btnOrdenarPorPreco');

botao.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenados);
}