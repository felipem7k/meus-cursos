const user = {
    nome: "Felipe",
    email: "f@f.com",
    nascimento: "2025-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
};

const admin = {
    nome: "Pedro",
    email: "p@p.com",
    nascimento: "2025-01-02",
    role: "admin",
    ativo: true,
    criarCurso: function() {
        console.log("Curso criado!");
    }
};

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();