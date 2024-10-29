const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const livrosFiltrados = livros.filter(livro => livro.categoria == this.value);
    exibirLivrosNaTela(livrosFiltrados);
}