
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", event => {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = Number(inputValor.value);
    let data: Date = new Date(inputData.value);

    if (tipoTransacao === TipoTransacao.DEPOSITO) {
        saldo += valor;
    } else if (tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO || tipoTransacao === TipoTransacao.TRANSFERENCIA) {
        saldo -= valor;
    } else {
        alert("Transação inválida!");
        return;
    }

    elementoSaldo.textContent = formatarMoeda(saldo);

    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    elementoFormulario.reset();
});