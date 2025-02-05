export default class View {
    elemento;
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(modelo) {
        let template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map