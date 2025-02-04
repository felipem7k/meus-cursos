import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export default abstract class View<T> {
    private elemento: HTMLElement;

    constructor(
        seletor: string, 
        private escapar: boolean = false
    ) {
        this.elemento = document.querySelector(seletor) as HTMLElement;
    }

    protected abstract template(modelo: T): string;

    @logarTempoDeExecucao()
    public update(modelo: T): void {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}