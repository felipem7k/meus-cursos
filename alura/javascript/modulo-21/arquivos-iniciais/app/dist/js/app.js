import NegociacaoController from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adiciona();
});
const botaoImporta = document.querySelector("#botao-importa");
botaoImporta.addEventListener("click", () => {
    controller.importaDados();
});
//# sourceMappingURL=app.js.map