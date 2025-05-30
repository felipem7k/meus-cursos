import Conta from "./Conta.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

export default class ContaPremium extends Conta {
    public registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            console.log("Ganhou um bônus de 0.50 centavos!");
            novaTransacao.valor += 0.5;
        }

        super.registrarTransacao(novaTransacao);
    }
}