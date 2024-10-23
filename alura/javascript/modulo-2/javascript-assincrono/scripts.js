const uploadBtn = document.getElementById('upload-btn');
const uploadInput = document.getElementById('imagem-upload');

uploadBtn.addEventListener("click", () => {
    uploadInput.click();
})

const imagemPrincipal = document.querySelector('.main-imagem');
const nomeDaImagem = document.querySelector('.container-imagem-nome p');

uploadInput.addEventListener('change', async (evento) => {
    const arquivo = evento.target.files[0]; // Pegando o arquivo selecionado pelo usuário
    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch (erro) {
            console.erro('Erro na leitura do arquivo.');
        };
    };
});

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({
                url: leitor.result,
                nome: arquivo.name
            });
        };

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}.`);
        };

        leitor.readAsDataURL(arquivo);
    });
}

const inputTags = document.getElementById('categoria');
const listaTags = document.getElementById('lista-tags');

listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains('remove-tag')) {
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    };
});

const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "DevOps"];

async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000);
    });
};

inputTags.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            try {
                const tagExiste = await verificaTagsDisponiveis(tagTexto);
                if (!tagExiste) throw new Error("Tag não encontrada na lista."); 
                const novaTag = document.createElement('li');
                novaTag.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                listaTags.appendChild(novaTag);
                inputTags.value = "";
            } catch (error) {
                alert(error.message);
            };
        };
    };
});

const botaoPublicar = document.querySelector('.botao-publicar');

async function publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;

            if (deuCerto) {
                resolve("Projeto publicado com sucesso.");
            } else {
                reject("Erro ao publicar o projeto.");
            }
        }, 2000);
    });
}

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();
    const nomeDoProjeto = document.getElementById('nome').value;
    const descricaoDoProjeto = document.getElementById('descricao').value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

    await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
});