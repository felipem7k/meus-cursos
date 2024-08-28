let produtosCarrinho = {};

function atualizarTexto() {
    let texto = '';
    let valorTotal = 0;
    for (let item in produtosCarrinho) {
        let split = item.split(' - ');
        let valor = split[1].replace("R$","");
        valorTotal += (valor * produtosCarrinho[item]);
        texto += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${produtosCarrinho[item]}x</span> ${split[0]} <span class="texto-azul">${split[1]}</span>
        </section>
        `;
    }
    document.getElementById('lista-produtos').innerHTML = texto;
    document.getElementById('valor-total').textContent = `R$${valorTotal}`;
    document.getElementById('quantidade').value = '';
}

function atualizarQuantidade(produto, quantidade) {
    if (!produtosCarrinho[produto]) {
        produtosCarrinho[produto] = quantidade;
    } else {
        produtosCarrinho[produto] += quantidade;
    }
    atualizarTexto();
}

function adicionar() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let produto = document.getElementById('produto').value;

    if (!quantidade || quantidade < 1) {
        alert('A quantidade selecionada deve ser maior que 1.');
        return;
    }
    if (!produto || produto == "") {
        alert('Produto inválido. Tente novamente.');
        return; 
    }

    atualizarQuantidade(produto, quantidade);
}

function limpar() {
    produtosCarrinho = {};
    atualizarTexto();
}