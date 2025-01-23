import PersonagemView from "./components/personagem-view.js";
import ArqueiroMago from "./modules/arqueiro-mago.js";
import Arqueiro from "./modules/arqueiro.js";
import Mago from "./modules/mago.js";
import Guerreiro from "./modules/guerreiro.js";

const personagemFelipe = new Mago("Felipe", "fogo", 4, 7);
const personagemJose = new Arqueiro("Jose", 5);
const personagemJoao = new ArqueiroMago("João", 5, "ar", 3, 10);
const personagemAna = new Guerreiro("Ana", 7);

const personagens = [personagemFelipe, personagemJose, personagemJoao, personagemAna];

new PersonagemView(personagens).render();
