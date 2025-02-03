export default class View {
    escapar;
    elemento;
    constructor(seletor, escapar = false) {
        this.escapar = escapar;
        this.elemento = document.querySelector(seletor);
    }
    update(modelo) {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
