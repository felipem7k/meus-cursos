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
        pensamentoAutoria.classList.add("pensamento-autoria")

        li.appendChild(iconeAspas)
        li.appendChild(pensamentoConteudo)
        li.appendChild(pensamentoAutoria)
        listaPensamentos.appendChild(li)
    }
};

export default ui;