import api from "./api.js";

const ui = {
    async renderizarPensamentos() {
        try {
            const resultadoApi = await api.buscarPensamentos();
            console.log(resultadoApi)

            resultadoApi.forEach(ui.adicionarPensamentoNaLista);
        } catch (error) {
            alert('Erro ao renderizar pensamentos');
            console.error(error);
        }
    },

    adicionarPensamentoNaLista(pensamento) {
        const listaPensamentos = document.getElementById("lista-pensamentos")
        const li = document.createElement("li")
        li.setAttribute("data-id", pensamento.id)
        li.classList.add("li-pensamento")

        const iconeAspas = document.createElement("img")
        iconeAspas.src = "assets/imagens/aspas-azuis.png"
        iconeAspas.alt = "Aspas azuis"
        iconeAspas.classList.add("icone-aspas")

        const pensamentoConteudo = document.createElement("div")
        pensamentoConteudo.textContent = pensamento.conteudo
        pensamentoConteudo.classList.add("pensamento-conteudo")

        const pensamentoAutoria = document.createElement("div")
        pensamentoAutoria.textContent = pensamento.autoria
        pensamentoAutoria.classList.add("pensamento-autoria");

        const botaoEditar = document.createElement('button');
        botaoEditar.classList.add('botao-editar');
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id);

        const iconeEditar = document.createElement('img');
        iconeEditar.src = 'assets/imagens/icone-editar.png';
        iconeEditar.alt = 'Editar';
        botaoEditar.appendChild(iconeEditar);

        const icones = document.createElement('div');
        icones.classList.add('icones');
        icones.appendChild(botaoEditar);

        li.appendChild(iconeAspas)
        li.appendChild(pensamentoConteudo)
        li.appendChild(pensamentoAutoria);
        li.appendChild(icones);
        listaPensamentos.appendChild(li)
    },

    async preencherFormulario(id) {
        const pensamento = await api.buscarPensamentoPorId(id);

        document.querySelector('#pensamento-id').value = pensamento.id;
        document.querySelector('#pensamento-conteudo').value = pensamento.conteudo;
        document.querySelector('#pensamento-autoria').value = pensamento.autoria;
    }
};

export default ui;