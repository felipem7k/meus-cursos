export default abstract class View<T> {
    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    abstract template(modelo: T): string;

    update(modelo: T): void {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}