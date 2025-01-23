import Arqueiro from "./arqueiro.js";
import Mago from "./mago.js";
import Personagem from "./personagem.js";

export default class ArqueiroMago extends Personagem {
    static tipo = "ArqueiroMago";
    static descricao = "Detentor de lancas e flechas mágicas!";
    ladoArqueiro;
    ladoMago;

    constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, level);
        this.ladoArqueiro = new Arqueiro(nome, level, destreza);
        this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
    }
}