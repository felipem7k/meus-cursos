import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const excluirItem = (elemento) => {
    const confirmado = confirm("Excluir item da lista?");

    if (confirmado) {
        elemento.remove();

        verificarListaComprados();
        verificarListaVazia();
    }
}

export {
    excluirItem
}