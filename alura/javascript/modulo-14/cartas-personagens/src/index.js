import Personagem from "./modules/personagem.js";

const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}

const personagemFelipe = new Personagem();
personagemFelipe.nome = "Felipe";
personagemFelipe.vida = 100;
personagemFelipe.mana = 30;
personagemFelipe.level = 3;
personagemFelipe.tipo = "guerreiro";
personagemFelipe.descricao = "Mt forte";

const personagemJose = new Personagem();
personagemJose.nome = "Jose";
personagemJose.vida = 40;
personagemJose.mana = 50;
personagemJose.level = 10;
personagemJose.tipo = "arqueiro";
personagemJose.descricao = "Mt forte";

console.log(`Insignia de ${personagemFelipe.nome}: ${personagemFelipe.obterInsignia()}`);
console.log(`Insignia de ${personagemJose.nome}: ${personagemJose.obterInsignia()}`);
