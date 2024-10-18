const itemListaVazia = document.getElementById("item-lista-vazia");

export function verificarListaVazia(lista) {
    console.log(lista.childElementCount)
    console.log(itemListaVazia.style.display)
    if (lista.childElementCount <= 3 && itemListaVazia.style.display === "none") {
        itemListaVazia.style.display = "block";
    } else if (lista.childElementCount > 2) {
        itemListaVazia.style.display = "none";
    }
}