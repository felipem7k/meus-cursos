function calcularValorTotal(livros) {
    return livros.reduce((total, livro) => total + livro.preco, 0);
}