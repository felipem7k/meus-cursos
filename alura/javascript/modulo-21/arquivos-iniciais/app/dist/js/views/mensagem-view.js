import View from "./view.js";
export default class MensagemView extends View {
    template(modelo) {
        return `
            <p class="alert alert-info">${modelo}</p>
        `;
    }
}
//# sourceMappingURL=mensagem-view.js.map