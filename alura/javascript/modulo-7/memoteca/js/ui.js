import api from "./api.js";

const ui = {
    async renderizarPensamentos(pensamentosFiltrados = null) {
        const listaPensamentos = document.getElementById("lista-pensamentos");
        listaPensamentos.innerHTML = "";

        try {
          let pensamentos = pensamentosFiltrados;
          if (!pensamentos) {
            pensamentos = await api.buscarPensamentos();
          }

          pensamentos.forEach(ui.adicionarPensamentoNaLista);
        } catch (error) {
            alert('Erro ao renderizar pensamentos');
            console.error(error);
        }
    },

    adicionarPensamentoNaLista(pensamento) {
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id);
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.textContent = pensamento.conteudo;
        pensamentoConteudo.classList.add("pensamento-conteudo");

        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.textContent = pensamento.autoria;
        pensamentoAutoria.classList.add("pensamento-autoria");

        const pensamentoData = document.createElement("div");
        var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        }
        const dataFormatada = pensamento.data.toLocaleDateString("pt-BR", options);
        const dataComRegex = dataFormatada.replace(/^(\w)/, (match) => match.toUpperCase());
        pensamentoData.textContent = dataComRegex;
        pensamentoData.classList.add("pensamento-data");

        const botaoEditar = document.createElement('button');
        botaoEditar.classList.add('botao-editar');
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id);

        const iconeEditar = document.createElement('img');
        iconeEditar.src = 'assets/imagens/icone-editar.png';
        iconeEditar.alt = 'Editar';
        botaoEditar.appendChild(iconeEditar);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("botao-excluir");
        botaoExcluir.onclick = async () => {
          try {
            await api.excluirPensamento(pensamento.id);
            ui.renderizarPensamentos();
          } catch (error) {
            alert("Erro ao excluir pensamnto");
          };
        };
        
        const iconeExcluir = document.createElement("img")
        iconeExcluir.src = "assets/imagens/icone-excluir.png"
        iconeExcluir.alt = "Excluir"
        botaoExcluir.appendChild(iconeExcluir)
    
        const botaoFavorito = document.createElement("button");
        botaoFavorito.classList.add('botao-favorito');
        botaoFavorito.onclick = async (botao) => {
          try {
            api.atualizarFavorito(pensamento.id, !pensamento.favorito);
            ui.renderizarPensamentos();            
          } catch (error) {
            alert('Erro ao adicionar aos favoritos');
          }
        };

        const iconeFavorito = document.createElement('img');
        iconeFavorito.src = pensamento.favorito ? 'assets/imagens/icone-favorito.png' : 'assets/imagens/icone-favorito_outline.png';
        iconeFavorito.alt = 'Icone de favorito';
        botaoFavorito.appendChild(iconeFavorito);

        const icones = document.createElement('div');
        icones.classList.add('icones');
        icones.appendChild(botaoFavorito);
        icones.appendChild(botaoEditar);
        icones.appendChild(botaoExcluir);

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(pensamentoData);
        li.appendChild(icones);
        listaPensamentos.appendChild(li);
    },

    async preencherFormulario(id) {
        const pensamento = await api.buscarPensamentoPorId(id);

        document.querySelector('#pensamento-id').value = pensamento.id;
        document.querySelector('#pensamento-conteudo').value = pensamento.conteudo;
        document.querySelector('#pensamento-autoria').value = pensamento.autoria;
        document.querySelector('#pensamento-data').value = pensamento.data.toISOString().split("T")[0];
        document.querySelector('#form-container').scrollIntoView();
    }
};

export default ui;