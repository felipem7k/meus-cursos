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
    }
}

export default api;