import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso '${nomeCurso}' criado com ${qtdVagas} vagas.`;
    }
}

const admin = new Admin("Pedro", "p@pmail.com", "2003-12-01");
console.log(admin.exibirInfos());

console.log(admin.criarCurso("Jquery", 10));
