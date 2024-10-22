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

inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            const novaTag = document.createElement('li');
            novaTag.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
            listaTags.appendChild(novaTag);
            inputTags.value = "";
        };
    };
});

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