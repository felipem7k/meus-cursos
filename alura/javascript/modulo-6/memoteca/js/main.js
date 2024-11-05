import api from "./api.js";
import ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();

    const pensamentoForm = document.querySelector('#pensamento-form');
    pensamentoForm.addEventListener('submit', manipularSubmissaoFormulario)
});

async function manipularSubmissaoFormulario(evento) {
    evento.preventDefault();

    const conteudo = document.querySelector('#pensamento-conteudo').value;
    const autoria = document.querySelector('#pensamento-autoria').value;
    
    try {
        await api.salvarPensamento({
            conteudo, autoria
        });
        ui.renderizarPensamentos();
    } catch {
        console.error;
    } finally {
        conteudo = '';
        autoria = '';
    }
}