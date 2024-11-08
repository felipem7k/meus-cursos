import api from "./api.js";
import ui from "./ui.js";

const botaoCancelar = document.querySelector('#botao-cancelar');
const inputBusca = document.querySelector('#campo-busca');

const pensamentosSet = new Set();

async function adicionarChaveAoPensamento() {
    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach(pensamento => {
        const chavePensamento = `${pensamento.conteudo.trim().toLowerCase()}-${pensamento.autoria.trim().toLowerCase()}`;
        pensamentosSet.add(chavePensamento);
      });
    } catch (error) {
      alert('Erro ao adicionar chave ao pensamento');
    };
};

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();
    adicionarChaveAoPensamento();

    const pensamentoForm = document.querySelector('#pensamento-form');
    pensamentoForm.addEventListener('submit', manipularSubmissaoFormulario);
    inputBusca.addEventListener('input', manipularBusca)
});


function validarConteudo(conteudo) {
    const regex = /^[A-Za-z\s]{10,}$/;
    const conteudoSemVazios = conteudo.replaceAll(/\s+/g, '');
    return regex.test(conteudoSemVazios);  
};

function validarAutoria(autoria) {
    const regex = /^[A-Za-z]{3,15}$/;
    return regex.test(autoria);  
};

async function manipularSubmissaoFormulario(evento) {
    evento.preventDefault();

    const id = document.querySelector('#pensamento-id').value;
    let conteudo = document.querySelector('#pensamento-conteudo').value;
    let autoria = document.querySelector('#pensamento-autoria').value;
    let data = document.querySelector('#pensamento-data').value;
    
    if (!validarAutoria(autoria)) {
        alert('O conteúdo precisa conter entre 3 e 15 carácteres, não contendo carácteres especiais nem espaço.');
        return;
    }

    if (!validarConteudo(conteudo)) {
        alert('O conteúdo precisa conter mais de 10 carácteres, não contendo carácteres especiais.');
        return;
    };

    if (!validarData(data)) {   
        alert('Não é permitido o cadastro de datas futuras. Selecione outra data.');
        return;
    };

    const conteudoEAutoria = `${autoria.trim().toLowerCase()}-${conteudo.trim().toLowerCase()}`;

    if (pensamentosSet.has(conteudoEAutoria)) {
        alert('Este pensamento já existe.');
        return
    };

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