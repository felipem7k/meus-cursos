import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import NegociacoesService from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";

export default class NegociacaoController {
    @domInjector("#data")
    declare inputData: HTMLInputElement;
    @domInjector("#quantidade")
    declare inputQuantidade: HTMLInputElement;
    @domInjector("#valor")
    declare inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");
    private service = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao: Negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas.");
            return;
        }

        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.atualizaView();
        this.limparFormulario();
    }

    public importaDados(): void {
        this.service
        .obterNegociacoes()
        .then((negociacoesDeHoje: Negociacao[]): Negociacao[] => {
            return negociacoesDeHoje.filter((negociacaoAtual: Negociacao): boolean => 
                !this.negociacoes.lista().some(negociacao => 
                    negociacao.ehIgual(negociacaoAtual)
                ));
        })
        .then((negociacoesDeHoje: Negociacao[]) => {
            negociacoesDeHoje.forEach((negociacao: Negociacao) => {
                this.negociacoes.adiciona(negociacao);
            });
            this.negociacoesView.update(this.negociacoes);
        });
    }

    private ehDiaUtil(data: Date) {
        const dia = data.getDay();
        return dia !== DiasDaSemana.DOMINGO && dia !== DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";

        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}