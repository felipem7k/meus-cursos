var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Armazenador from "./Armazenador.js";
import { ValidaDebito, ValidaDeposito } from "./Decorators.js";
import { TipoTransacao } from "./TipoTransacao.js";
export default class Conta {
    nome;
    saldo;
    transacoes;
    constructor(nome) {
        this.nome = nome;
        this.saldo = Armazenador.obter("saldo") || 0;
        this.transacoes = Armazenador.obter("transacoes", (key, value) => {
            if (key === "data") {
                return new Date(value);
            }
            return value;
        }) || [];
    }
    getSaldo() {
        return this.saldo;
    }
    getTitular() {
        return this.nome;
    }
    getDataAcesso() {
        return new Date();
    }
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(this.transacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", {
                month: "long",
                year: "numeric"
            });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    listaDeTransacoes: []
                });
            }
            gruposTransacoes.at(-1).listaDeTransacoes.push(transacao);
        }
        return gruposTransacoes;
    }
    debitar(valor) {
        this.saldo -= valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO || novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error("Transação inválida!");
        }
        this.transacoes.push(novaTransacao);
        Armazenador.salvar("transacoes", this.transacoes);
        Armazenador.salvar("saldo", this.saldo);
        console.log(this.getGruposTransacoes());
    }
}
__decorate([
    ValidaDebito
], Conta.prototype, "debitar", null);
__decorate([
    ValidaDeposito
], Conta.prototype, "depositar", null);
