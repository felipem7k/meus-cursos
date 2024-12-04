import { pipe, partialize } from "../utils/operators.js";
import { handleStatus } from "../utils/promise-helpers.js"

const API_URL = "http://localhost:3000/notas"

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo === code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

export const notaService = {
    async listAll() {
        return await fetch(API_URL)
        .then(handleStatus)
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
            .then(sumNotas);
    }
}