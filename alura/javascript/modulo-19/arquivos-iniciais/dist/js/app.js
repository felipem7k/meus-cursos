import Negociacao from "./models/negociacao.js";

const negociacao = new Negociacao(
    new Date(),
    30,
    20
);

console.log(negociacao.volume);
