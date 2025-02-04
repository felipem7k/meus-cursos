import Negociacao from "../models/negociacao.js";
export default class NegociacoesService {
    async obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then(resposta => {
            return resposta.json();
        })
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
