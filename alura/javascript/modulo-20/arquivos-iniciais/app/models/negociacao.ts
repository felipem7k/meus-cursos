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
}