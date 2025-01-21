let listaDeItens = [];

const form = document.querySelector("#form-itens");
const itensInput = document.querySelector("#receber-item");
const ulItens = document.querySelector("#lista-de-itens");
const ulItensComprados = document.querySelector("#itens-comprados");

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
                    <input type="text" class="is-size-5" value="${elemento.nome}"></input>
                </div>
                <div>
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
}
