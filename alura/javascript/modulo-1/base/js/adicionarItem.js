import { criarItem } from "./criariItem.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault();

    if (item.value == "") {
        alert("Por favor, insira o nome do item."); 
        return;
    }

    const itemCriado = criarItem(item.value, listaCompras);

    listaCompras.appendChild(itemCriado);
    verificarListaVazia();
    item.value = "";
}