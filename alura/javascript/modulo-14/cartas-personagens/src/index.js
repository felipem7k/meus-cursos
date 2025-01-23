import PersonagemView from "./components/personagem-view.js";
import ArqueiroMago from "./modules/arqueiro-mago.js";
import Arqueiro from "./modules/arqueiro.js";
import Mago from "./modules/mago.js";
import Personagem from "./modules/personagem.js";

const personagemFelipe = new Mago("Felipe", 3, "fogo", 4, 7);
const personagemJose = new Arqueiro("Jose", 5, 5);
const personagemJoao = new ArqueiroMago("João", 4, 5, "ar", 3, 10);

const personagens = [personagemFelipe, personagemJose, personagemJoao];

new PersonagemView(personagens).render();
console.log(Personagem.verificarVencedor(personagemFelipe, personagemJoao));
