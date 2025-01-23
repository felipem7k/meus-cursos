import imprimeCotacao from "./imprimeCotacao.js";

const graficoDolar = document.querySelector("#graficoDolar");

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
            {
                label: 'Dólar',
                data: [],
                borderWidth: 1
            }
        ]
    },
});

function geraHorario() {
    let data = new Date();
    let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    return horario; 
}

async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const conectaTraduzido = await conecta.json();
    let tempo = geraHorario();
    let valor = conectaTraduzido.USDBRL.ask;
    adicionarDados(graficoParaDolar, tempo, valor);
    imprimeCotacao("dolar", valor);
}

setInterval(conectaAPI, 10000);

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach(dataset => {
        dataset.data.push(dados);
    });
    grafico.update();
}