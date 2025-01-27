import ContaPremium from "../types/ContaPremium.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatadores.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
export const contaPrincipal = new ContaPremium("Felipe");
elementoDataAcesso.textContent = formatarData(contaPrincipal.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
function renderizarSaldo() {
    elementoSaldo.textContent = formatarMoeda(contaPrincipal.getSaldo());
}
renderizarSaldo();
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
