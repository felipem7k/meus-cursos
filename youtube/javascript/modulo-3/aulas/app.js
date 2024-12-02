import modificador from "./modificador.js";
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCapitalizados = modificador.capitalizar(ingredientesOrdenados, 'nome');
let containerIngredientes = document.querySelector('#container-ingredientes');

for (let ingrediente of ingredientesCapitalizados) {
    containerIngredientes.innerHTML += `
        <div class="ingrediente">
            <img src="img/${ingrediente.img}" srcset="">
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div> 
    `;
}

