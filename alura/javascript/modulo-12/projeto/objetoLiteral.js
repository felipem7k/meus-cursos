const user = {
    nome: "Felipe",
    email: "f@f.com",
    nascimento: "2025-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}