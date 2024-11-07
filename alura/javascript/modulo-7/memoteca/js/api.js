const uri = 'http://localhost:3000/pensamentos';

function converterStringParaData(data) {
    const [ano, mes, dia] = data.split('-');
    return new Date(Date.UTC(ano, mes - 1, dia));
}

const api = {
    async buscarPensamentos() {
        try {
            const resposta = await axios.get(uri);
            const pensamentos = await resposta.data;
            return pensamentos.map(pensamento => {
                return {...pensamento, data: new Date(pensamento.data)}
            });
        } catch (error) {
            console.error(error)
        };
    },

    async salvarPensamento(pensamento) {
        try {
            const data = converterStringParaData(pensamento.data);
            const resposta = await axios.post(uri, {...pensamento, favorito: false, data: data.toISOString()});
            return resposta.data;
        } catch (error) {
            console.error(error);
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const resposta = await axios.get(`${uri}/${id}`);
            const pensamento = await resposta.data;
            return {...pensamento, data: new Date(pensamento.data)};
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