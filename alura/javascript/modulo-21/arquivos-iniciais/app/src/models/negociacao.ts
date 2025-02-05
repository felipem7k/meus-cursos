import Modelo from "../interfaces/modelo.js";

export default class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {
    }

    get data(): Date
    {
        return structuredClone(this._data);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() && this.data.getMonth() === negociacao.data.getMonth() && this.data.getFullYear() === negociacao.data.getFullYear();
    }

    public static criaDe(data: string, quantidade: string, valor: string): Negociacao {
        return new Negociacao(
            new Date(data.replace(/-/g, ",")),
            parseInt(quantidade),
            parseFloat(valor)
        )
    }
}