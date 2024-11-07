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
    },

    async buscarPensamentoPorTermo(termo) {
        try {
            const pensamentos = await this.buscarPensamentos();
            const termoEmMinusculo = termo.toLowerCase();

            return pensamentos.filter(pensamento => {
                return pensamento.conteudo.toLowerCase().includes(termoEmMinusculo) || pensamento.autoria.toLowerCase().includes(termoEmMinusculo);
            });
        } catch {
            alert('Ocorreu algum erro ao buscar pensamentos.');
        }
    },

    async atualizarFavorito(id, favorito) {
        try {
            const resposta = axios.patch(`${uri}/${id}`, {favorito});
            return resposta.data;
        } catch {
            console.error
        }
    }
}

export default api;