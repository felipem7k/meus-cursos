import { handleStatus } from "../utils/promise-helpers.js"

const API_URL = "http://localhost:3000/notas"

const sumItems = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo === code)
    .reduce((total, item) => total + item.valor, 0);

export const notaService = {
    async listAll() {
        return await fetch(API_URL).then(handleStatus);
    },

    async sumItems(code) {
        return await this.listAll().then(sumItems(code));
    }
}