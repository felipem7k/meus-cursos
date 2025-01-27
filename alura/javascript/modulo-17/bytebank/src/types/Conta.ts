import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao";
import { Transacao } from "./Transacao.js";

export default class Conta {
    nome: string;
    private saldo: number;
    private transacoes: Transacao[];

    constructor(nome: string) {
        this.nome = nome;
        this.saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
        this.transacoes = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
            if (key === "data") {
                return new Date(value);
            }
            return value;
        }) || [];
    }
    
    getSaldo(): number {
        return this.saldo;
    }

    getDataAcesso(): Date {
        return new Date();
    }

    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", {
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

    debitar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que 0!");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
    
        this.saldo -= valor;
    }
    
    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que 0!");
        }
        this.saldo += valor;
    }
    

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO || novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        } else {
            throw new Error("Transação inválida!");
        }

        this.transacoes.push(novaTransacao);

        localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
        localStorage.setItem("saldo", JSON.stringify(this.saldo));

        console.log(this.getGruposTransacoes());
    }
}