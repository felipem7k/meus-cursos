import { escapar } from "../decorators/escapar.js";
import Negociacoes from "../models/negociacoes.js";
import View from "./view.js";

export default class NegociacoesView extends View<Negociacoes> {

    @escapar
    protected template(modelo: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${modelo.lista().map(negociacao => `
                <tr>    
                    <td>${this.formatar(negociacao.data)}</td>    
                    <td>${negociacao.quantidade}</td>    
                    <td>${negociacao.valor}</td>    
                </tr>    
                `).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}