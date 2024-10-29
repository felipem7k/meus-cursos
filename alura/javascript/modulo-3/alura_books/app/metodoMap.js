function calcularDesconto(livros) {
    const livrosComDesconto = livros.map(livro => {
        const desconto = 0.3;
        return {...livro, preco: (livro.preco - (livro.preco * desconto)).toFixed(2)};
    });
    return livrosComDesconto;
}