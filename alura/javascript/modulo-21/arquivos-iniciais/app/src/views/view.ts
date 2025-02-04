export default abstract class View<T> {
    private elemento: HTMLElement;

    constructor(
        seletor: string
    ) {
        this.elemento = document.querySelector(seletor) as HTMLElement;
    }

    protected abstract template(modelo: T): string;

    public update(modelo: T): void {
        let template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}