import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatadores.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;


elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);

function renderizarSaldo(): void {
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
}

renderizarSaldo();

const SaldoComponent = {
    atualizar(): void {
        renderizarSaldo();
    }
}

export default SaldoComponent;