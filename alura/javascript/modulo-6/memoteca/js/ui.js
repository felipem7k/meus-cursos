import api from "./api.js";

const ui = {
    async renderizarPensamentos() {
        const listaPensamentos = document.querySelector('#lista-pensamentos');

        try {
            const resultadoApi = await api.buscarPensamentos();
            console.log(resultadoApi)

            resultadoApi.forEach(pensamento => {
                listaPensamentos.innerHTML += `
                <li class="li-pensamento" data-id="${pensamento.id}">
                    <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                    <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                    <div class="pensamento-autoria">${pensamento.autoria}</div>
                </li>
                ` 
            });
        } catch (error) {
            alert('Erro ao renderizar pensamentos');
            console.error(error);
        }
    }
};

export default ui;