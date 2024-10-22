const uploadBtn = document.getElementById('upload-btn');
const uploadInput = document.getElementById('imagem-upload');

uploadBtn.addEventListener("click", () => {
    uploadInput.click();
})

// uploadInput.addEventListener('change', function(event) {
//     const file = event.target.files[0]; // Pegando o arquivo selecionado pelo usuário
//     const preview = document.getElementById('preview');
//     if (file) {
//         const reader = new FileReader(); // Criando uma instância do FileReader
//         reader.onload = function(e) {
//             preview.src = e.target.result; // Atribuindo o resultado da leitura como fonte da imagem de pré-visualização
//             preview.style.display = 'block'; // Tornando a pré-visualização visível
//         };
//         reader.readAsDataURL(file); // Lendo o arquivo como um Data URL
//     }
// });

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