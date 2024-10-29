const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const categoria = this.value;
    const livrosFiltrados = categoria == "disponivel" ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados);

    if (categoria == "disponivel") {
        const totalDeLivros = calcularValorTotal(livrosFiltrados);
        valorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalDeLivros}</span></p>
        </div>
        `
    }
}