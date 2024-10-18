import { adicionarItem } from './js/adicionarItem.js';
import { verificarListaComprados } from './js/verificarListaComprados.js';
import { verificarListaVazia } from './js/verificarListaVazia.js';

const botaoSalvarItem = document.getElementById("adicionar-botao");
botaoSalvarItem.addEventListener("click", adicionarItem);

verificarListaComprados();
verificarListaVazia();