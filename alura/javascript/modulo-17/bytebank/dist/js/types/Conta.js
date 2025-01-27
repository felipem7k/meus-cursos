import Armazenador from "./Armazenador.js";
import { TipoTransacao } from "./TipoTransacao.js";
class Conta {
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
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que 0!");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
        this.saldo -= valor;
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que 0!");
        }
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
let conta = new Conta("Felipe");
export default conta;
