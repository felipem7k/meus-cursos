import api from "./api.js";
import ui from "./ui.js";

const botaoCancelar = document.querySelector('#botao-cancelar');
const inputBusca = document.querySelector('#campo-busca');

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();

    const pensamentoForm = document.querySelector('#pensamento-form');
    pensamentoForm.addEventListener('submit', manipularSubmissaoFormulario);
    inputBusca.addEventListener('input', manipularBusca)
});

async function manipularSubmissaoFormulario(evento) {
    evento.preventDefault();

    const id = document.querySelector('#pensamento-id').value;
    let conteudo = document.querySelector('#pensamento-conteudo').value;
    let autoria = document.querySelector('#pensamento-autoria').value;
    let data = document.querySelector('#pensamento-data').value;
    
    if (!validarData(data)) {   
        alert('Não é permitido o cadastro de datas futuras. Selecione outra data.');
        return;
    }

    try {
        if (id) {
            await api.editarPensamento({id, conteudo, autoria, data});
        } else {
            await api.salvarPensamento({conteudo, autoria, data});
        };
        ui.renderizarPensamentos();
    } catch {
        console.error;
    } finally {
        conteudo = '';
        autoria = '';
        data = '';
    }
}

botaoCancelar.addEventListener('click', () => {
    document.querySelector('#pensamento-conteudo').value = '';
    document.querySelector('#pensamento-autoria').value = '';
});

async function manipularBusca(busca) {
    const termoBusca = inputBusca.value;
    try {
        const pensamentosFiltradors = await api.buscarPensamentoPorTermo(termoBusca);
        ui.renderizarPensamentos(pensamentosFiltradors);    
    } catch {
        alert('Erro ao realizar busca.')
    }
}

function validarData(data) {
    const dataAtual = new Date();
    const dataInserida = new Date(data);
    return dataAtual >= dataInserida;
}