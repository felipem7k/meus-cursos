import { atualizarData } from "./atualizardata.js";

export const editarItem = (elemento) => {
    const novoNome = prompt("Digite o novo nome do item:");

    if (novoNome && novoNome.trim() !== "") {
        let nomeAtual = elemento.querySelector("#item-nome");
        nomeAtual.textContent = novoNome;

        let dataAtual = elemento.querySelector(".item-lista-texto");
        atualizarData(dataAtual);
    }
}