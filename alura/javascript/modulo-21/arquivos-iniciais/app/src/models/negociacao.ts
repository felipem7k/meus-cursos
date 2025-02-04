export default class Negociacao {
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

    public static criaDe(data: string, quantidade: string, valor: string): Negociacao {
        return new Negociacao(
            new Date(data.replace(/-/g, ",")),
            parseInt(quantidade),
            parseFloat(valor)
        )
    }
}