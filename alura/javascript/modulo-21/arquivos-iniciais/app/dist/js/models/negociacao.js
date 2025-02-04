export default class Negociacao {
    _data;
    quantidade;
    valor;
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return structuredClone(this._data);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(data, quantidade, valor) {
        return new Negociacao(new Date(data.replace(/-/g, ",")), parseInt(quantidade), parseFloat(valor));
    }
}
