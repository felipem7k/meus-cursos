import Negociacao from "../models/negociacao.js";

export default class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(): void {
        const negociacao: Negociacao = this.criaNegociacao();
        
        console.log(negociacao);

        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        return new Negociacao(
            new Date(this.inputData.value.replace(/-/g, ",")),
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        );
    }

    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        
        this.inputData.focus();
    }
}