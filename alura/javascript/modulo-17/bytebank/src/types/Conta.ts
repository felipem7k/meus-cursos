import Armazenador from "./Armazenador.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

class Conta {
    protected nome: string;
    protected saldo: number;
    private transacoes: Transacao[];

    constructor(nome: string) {
        this.nome = nome;
        this.saldo = Armazenador.obter<number>("saldo") || 0;
        this.transacoes = Armazenador.obter<Transacao[]>("transacoes", (key: string, value: any) => {
            if (key === "data") {
                return new Date(value);
            }
            return value;
        }) || [];
    }
    
    public getSaldo(): number {
        return this.saldo;
    }

    public getTitular(): string {
        return this.nome;
    }

    public getDataAcesso(): Date {
        return new Date();
    }

    public getGruposTransacoes(): GrupoTransacao[] {
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

    protected debitar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que 0!");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
    
        this.saldo -= valor;
    }
    
    protected depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que 0!");
        }
        this.saldo += valor;
    }
    

    public registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO || novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        } else {
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