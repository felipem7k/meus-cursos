const listaCompras = document.getElementById("lista-de-compras");
const itemListaVazia = document.getElementById("item-lista-vazia");

export function verificarListaVazia() {
    if (listaCompras.querySelectorAll("li").length === 0) {
        itemListaVazia.style.display = "block";
    } else {
        itemListaVazia.style.display = "none";
    }
}