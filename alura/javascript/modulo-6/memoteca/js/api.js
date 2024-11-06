const uri = 'http://localhost:3000/pensamentos';

const api = {
    async buscarPensamentos() {
        try {
            const resposta = await axios.get(uri);
            return await resposta.data;
        } catch (error) {
            console.error(error)
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const resposta = await axios.post(uri, pensamento);
            return resposta.data;
        } catch (error) {
            console.error(error);
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const resposta = await axios.get(`${uri}/${id}`);
            return await resposta.data;
        } catch (error) {
            console.error(error)
        }
    },

    async editarPensamento(pensamento) {
        try {
            const resposta = await axios.put(`${uri}/${pensamento.id}`, pensamento);
            return resposta.data;
        } catch (error) {
            console.error(error);
        }
    },

    async excluirPensamento(id) {
        try {
            const resposta = await axios.delete(`${uri}/${id}`);
            return resposta.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default api;