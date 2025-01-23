export default class Personagem {
    static tipo;
    static descricao;
    nome;
    #level;
    vida = 100;
    mana = 100;

    constructor(nome) {
        this.nome = nome;
        this.#level = 1;
    }

    get level() {
        return this.#level;
    }

    set level(level) {
        if (level >= 1 && level <= 10) {
            this.#level = level;
        };
    }

    aumentarLevel() {
        this.level += 1;
    }

    diminuirLevel() {
        this.level -= 1;
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`;
        }
        return `${this.constructor.tipo} iniciante`;
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.#level === personagem2.#level) {
            return "Empate!";
        }
        if (personagem1.#level > personagem2.#level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`;
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`;
    }
}