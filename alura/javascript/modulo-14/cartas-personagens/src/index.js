import PersonagemView from "./components/personagem-view.js";
import ArqueiroMago from "./modules/arqueiro-mago.js";
import Arqueiro from "./modules/arqueiro.js";
import Mago from "./modules/mago.js";

const personagemFelipe = new Mago("Felipe", 3, "fogo", 4, 7);
personagemFelipe.descricao = "Mt forte";

const personagemJose = new Arqueiro("Jose", 5, 5);
personagemJose.descricao = "Mt fraco";

const personagemJoao = new ArqueiroMago("João", 4, 5, "ar", 3, 10);
personagemJoao.descricao = "Super arqueiro e mago";

const personagens = [personagemFelipe, personagemJose, personagemJoao];

new PersonagemView(personagens).render();
