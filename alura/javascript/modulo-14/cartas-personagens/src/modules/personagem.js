export default class Personagem {
    nome;
    level;
    tipo;
    vida = 100;
    mana = 100;
    descricao;

    constructor(nome, level, tipo) {
        this.nome = nome;
        this.level = level;
        this.tipo = tipo;
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacável ${this.tipo}`;
        }
        return `${this.tipo} iniciante`;
    }
}