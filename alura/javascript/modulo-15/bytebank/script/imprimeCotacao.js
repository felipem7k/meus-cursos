const lista = document.querySelectorAll("[data-lista]");

export default function selecionaCotacao(nome, valor) {
    lista.forEach((listaEscolhida) => {
        if (listaEscolhida.id == nome) {
            imprimeCotacao(listaEscolhida, nome, valor)
        }
    })
}

function imprimeCotacao(listaEscolhida, nome, valor) {
    listaEscolhida.innerHTML = "";
    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const listaItem = document.createElement("li");
        listaItem.innerHTML = `${multiplicador} ${nome}: R$${(valor * multiplicador).toFixed(2)}`;
        listaEscolhida.appendChild(listaItem);
    }
}