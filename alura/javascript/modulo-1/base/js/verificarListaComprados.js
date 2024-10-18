const listaComprados = document.getElementById("lista-comprados");

export function verificarListaComprados() {
    if (listaComprados.querySelectorAll("li").length === 0) {
        listaComprados.style.display = "none";
    } else {
        listaComprados.style.display = "block";
    }
}