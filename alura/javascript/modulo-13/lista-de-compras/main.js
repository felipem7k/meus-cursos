let listaDeItens = [];

const form = document.querySelector("#form-itens");
const itensInput = document.querySelector("#receber-item");

form.addEventListener("submit", evento => {
    evento.preventDefault();
    salvarItem();
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some(item => item.nome.toLowerCase() === comprasItem.toLowerCase());

    if (checarDuplicado) {
        alert("Não é possível adicionar. Item já está na lista.");
        return;
    }

    listaDeItens.push({
        nome: comprasItem
    });

    console.log(listaDeItens);
}
