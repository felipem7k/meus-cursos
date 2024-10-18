import { criarItem } from "./criariItem.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemCriado = criarItem(item.value, listaCompras);
    
    verificarListaVazia(listaCompras);

    listaCompras.appendChild(itemCriado);

}