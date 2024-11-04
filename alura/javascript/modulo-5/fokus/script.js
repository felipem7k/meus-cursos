const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const comecarBotao = document.getElementById('start-pause');
const comecarBotaoSpan = document.querySelector('#start-pause span');
const comecarBotaoImg = document.querySelector('#start-pause img');
const musicaInput = document.getElementById('alternar-musica');
const timer = document.getElementById('timer');

const musica = new Audio('sons/luna-rise-part-one.mp3');

const beep = new Audio('sons/beep.mp3');
const pause = new Audio('sons/pause.mp3');
const play = new Audio('sons/play.wav');

musica.loop = true;

let intervaloId = null;
let contagemEmSegundos = 1500;

musicaInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto(contexto) {
    botoes.forEach(function(botao){
        botao.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            contagemEmSegundos = 1500;
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            contagemEmSegundos = 300;
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
            contagemEmSegundos = 900;
        default:
            break;
    }
    zerar();
    mostrarTempo();
}

const contagemRegressiva = () => {
    if (contagemEmSegundos <= 0) {
        beep.play();
        alert("Tempo finalizado!");
        const focoAtivo = html.getAttribute('data-contexto') == "foco";
        if (focoAtivo) {
            const evento = new CustomEvent('FocoAtivo');
            document.dispatchEvent(evento);
        }
        zerar();
        return;
    }
    contagemEmSegundos--;
    mostrarTempo();
};

comecarBotao.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        zerar();
        pause.play();
        return;
    }
    play.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    comecarBotaoSpan.textContent = "Pausar";
    comecarBotaoImg.setAttribute('src', 'imagens/pause.png')
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
    comecarBotaoSpan.textContent = "Iniciar";
    comecarBotaoImg.setAttribute('src', 'imagens/play_arrow.png');
}

function mostrarTempo() {
    const tempo = new Date(contagemEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'});
    timer.textContent = tempoFormatado
}

mostrarTempo();