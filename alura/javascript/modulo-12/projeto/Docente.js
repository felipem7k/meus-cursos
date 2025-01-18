import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso '${curso}', docente: ${this.nome}.`;
    }
}

const docente = new Docente("Ana", "a@amail.com", "1999-10-04");
console.log(docente.aprovarEstudante("Felipe", "Jquery"));
