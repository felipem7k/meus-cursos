import PersonagemView from "./components/personagem-view.js";
import Personagem from "./modules/personagem.js";

const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}

const personagemFelipe = new Personagem("Felipe", 3, "Mago");
personagemFelipe.descricao = "Mt forte";

const personagemJose = new Personagem("Jose", 5, "Guerreiro");
personagemJose.descricao = "Mt fraco";

const personagens = [personagemFelipe, personagemJose];

new PersonagemView(personagens).render();
