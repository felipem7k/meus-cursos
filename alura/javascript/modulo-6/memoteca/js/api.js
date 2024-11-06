const uri = 'http://localhost:3000/pensamentos';

const api = {
    async buscarPensamentos() {
        try {
            const resposta = await fetch(uri);
            return await resposta.json();
        } catch (error) {
            console.error(error)
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const resposta = await fetch(uri,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return resposta.json();
        } catch (error) {
            console.error(error);
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const resposta = await fetch(`${uri}/${id}`);
            return await resposta.json();
        } catch (error) {
            console.error(error)
        }
    },

    async editarPensamento(pensamento) {
        try {
            const resposta = await fetch(`${uri}/${pensamento.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return resposta.json();
        } catch (error) {
            console.error(error);
        }
    }
}

export default api;