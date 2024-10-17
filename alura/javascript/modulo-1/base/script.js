const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");
const listaCompras = document.getElementById("lista-de-compras");
let contador = 1

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();
    
    // li
    const itemDaLista = document.createElement("li");

    // li > div.item-lista-container
    const containerListaDeItem = document.createElement("div");
    containerListaDeItem.classList.add("item-lista-container");

    // li > div.item-lista-container > div.container-nome-compra
    const containerCompraNome = document.createElement("div");
    containerCompraNome.classList.add("container-nome-compra");

    // li > div.item-lista-container > div.container-nome-compra > div.checkbox-container
    const compraCheckboxContainer = document.createElement("div");
    compraCheckboxContainer.classList.add("checkbox-container");

    // li > div.item-lista-container > div.container-nome-compra > div.checkbox-container > label.checkbox-1
    const checkboxLabel = document.createElement("label");
    const checkboxId = "checkbox-" + contador;
    contador++;
    checkboxLabel.setAttribute("for", checkboxId);

    // li > div.item-lista-container > div.container-nome-compra > div.checkbox-container > label.checkbox-1 > input.checkbox-input
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = checkboxId;

    // li > div.item-lista-container > div.container-nome-compra > div.checkbox-container > label.checkbox-1 > div.checkbox-customizado
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox-customizado");
    checkboxDiv.classList.add("checked");

    checkboxLabel.appendChild(checkboxDiv);
    checkboxLabel.appendChild(checkboxInput);
    compraCheckboxContainer.appendChild(checkboxLabel);

    // li > div.item-lista-container > div.container-nome-compra > p
    const compraNome = document.createElement("p");
    compraNome.textContent = item.value;

    containerCompraNome.appendChild(compraCheckboxContainer);
    containerCompraNome.appendChild(compraNome);

    // li > div.item-lista-container > div
    const containerCompraBotoes = document.createElement("div");

    // li > div.item-lista-container > div > button.item-lista-button
    const compraBotao2 = document.createElement("button");
    compraBotao2.classList.add("item-lista-button");

    // li > div.item-lista-container > div > button.item-lista-button > img
    const compraBotao2Img = document.createElement("img");
    compraBotao2Img.src = "./img/delete.svg";
    compraBotao2Img.alt = "remover";
    compraBotao2.appendChild(compraBotao2Img);

    // li > div.item-lista-container > div > button.item-lista-button
    const compraBotao1 = document.createElement("button");
    compraBotao1.classList.add("item-lista-button");

    // li > div.item-lista-container > div > button.item-lista-button > img
    const compraBotao1Img = document.createElement("img");
    compraBotao1Img.src = "./img/edit.svg";
    compraBotao1Img.alt = "editar";
    compraBotao1.appendChild(compraBotao1Img);

    containerCompraBotoes.appendChild(compraBotao2);
    containerCompraBotoes.appendChild(compraBotao1);

    containerListaDeItem.appendChild(containerCompraNome);
    containerListaDeItem.appendChild(containerCompraBotoes);

    // li > p.item-lista-texto
    const data = document.createElement("p");
    data.classList.add("item-lista-texto");
    data.textContent = "Segunda-feira (31/10/2022) às 08:30";

    itemDaLista.appendChild(containerListaDeItem);
    itemDaLista.appendChild(data);

    listaCompras.appendChild(itemDaLista);
    console.log("teste")
}