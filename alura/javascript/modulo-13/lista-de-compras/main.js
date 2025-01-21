let listaDeItens = [];
let itemAEditar;

const form = document.querySelector("#form-itens");
const itensInput = document.querySelector("#receber-item");
const ulItens = document.querySelector("#lista-de-itens");
const ulItensComprados = document.querySelector("#itens-comprados");
const listaRecuperada = localStorage.getItem('listaDeItens');

function atualizaLocalStorage() {
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens));
}

if (listaRecuperada) {
    listaDeItens = JSON.parse(listaRecuperada);
    mostrarItem();
}

form.addEventListener("submit", evento => {
    evento.preventDefault();
    salvarItem();
    mostrarItem();
    itensInput.focus();
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some(item => item.nome.toLowerCase() === comprasItem.toLowerCase());

    if (checarDuplicado) {
        alert("Não é possível adicionar. Item já está na lista.");
        return;
    }

    listaDeItens.push({
        nome: comprasItem,
        checar: false
    });

    itensInput.value = "";
}

function mostrarItem() {
    ulItens.innerHTML = "";
    ulItensComprados.innerHTML = "";
    listaDeItens.forEach((elemento, index) => {
        if (elemento.checar) {
            ulItensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5">${elemento.nome}</span>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
            `;
        } else {
            ulItens.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.nome}" ${index !== Number(itemAEditar) ? "disabled" : ""}></input>
                </div>
                <div>
                    ${index === Number(itemAEditar) ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
            `;
        }
    });

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');
    inputsCheck.forEach(input => {
        input.addEventListener("click", evento => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute("data-value");
            listaDeItens[valorDoElemento].checar = evento.target.checked;
            mostrarItem();
        });
    });

    const deletarObjetos = document.querySelectorAll(".deletar");
    deletarObjetos.forEach(input => {
        input.addEventListener("click", evento => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute("data-value");
            listaDeItens.splice(valorDoElemento, 1);
            mostrarItem();
        });
    });

    const editarItens = document.querySelectorAll(".editar");
    editarItens.forEach(input => {
        input.addEventListener("click", evento => {
            itemAEditar = evento.target.parentElement.parentElement.getAttribute("data-value");
            mostrarItem();
        });
    });

    atualizaLocalStorage();
}

function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`);
    listaDeItens[itemAEditar].nome = itemEditado.value;
    itemAEditar = -1;
    mostrarItem();
}