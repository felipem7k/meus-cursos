import { Maybe } from "../utils/maybe.js";
import { pipe, partialize } from "../utils/operators.js";
import { handleStatus } from "../utils/promise-helpers.js"

const API_URL = "http://localhost:3000/notas"

const getItemsFromNotas = notasM => notasM.map(notas => notas.$flatMap(nota => nota.itens));
const filterItemsByCode = (code, itemsM) => itemsM.map(items => items.filter(item => item.codigo === code));
const sumItemsValue = itemsM => itemsM.map(items => items.reduce((total, item) => total + item.valor, 0));

export const notaService = {
    async listAll() {
        return await fetch(API_URL)
        .then(handleStatus)
        .then(notas => Maybe.of(notas))
        .catch(err => {
            console.log(err);
            return Promise.reject("Não foi possível obter as notas fiscais.");
        });
    },

    async sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code);
        const sumNotas = pipe(
            getItemsFromNotas,
            filterItems,
            sumItemsValue
        );

        return await this.listAll()
            .then(sumNotas)
            .then(result => result.getOrElse(0));
    }
}