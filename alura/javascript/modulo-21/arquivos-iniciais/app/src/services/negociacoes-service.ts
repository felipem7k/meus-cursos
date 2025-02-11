import NegociacoesDoDia from "../interfaces/negociacoes-do-dia.js";
import Negociacao from "../models/negociacao.js";

export default class NegociacoesService {
    public async obterNegociacoes(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")
        .then(resposta => {
            return resposta.json();
        })
        .then((dados: NegociacoesDoDia[]): Negociacao[] => {
            return dados.map(dado => {
                return new Negociacao(
                    new Date(),
                    dado.vezes,
                    dado.montante
                );
            });
        });
    }
}