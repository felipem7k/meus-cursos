import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatadores.js";
import { contaPrincipal } from "./saldo-component.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

function renderizarExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = contaPrincipal.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    gruposTransacoes.forEach(grupoTransacao => {
        let htmlTransacaoItem: string = "";
        grupoTransacao.listaDeTransacoes.forEach(transacao => {
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
            `;
        });

        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `;
    });

    if (htmlRegistroTransacoes === "") {
        elementoRegistroTransacoesExtrato.innerHTML = "<div>Não há transações registradas.</div>";
    } else {
        elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
    }
}

renderizarExtrato();

const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    }
}

export default ExtratoComponent;