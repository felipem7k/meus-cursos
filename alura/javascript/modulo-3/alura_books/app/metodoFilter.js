const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const categoria = this.value;
    const livrosFiltrados = categoria == "disponivel" ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados);
}