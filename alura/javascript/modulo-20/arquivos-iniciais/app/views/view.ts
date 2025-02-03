export default abstract class View<T> {
    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(modelo: T): string;

    public update(modelo: T): void {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}