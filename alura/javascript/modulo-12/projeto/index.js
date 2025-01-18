import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";


const aluno = new User("Felipe", "f@fmail.com", "2022-03-12");
const admin = new Admin("Pedro", "p@pmail.com", "2003-12-01");
const docente = new Docente("Ana", "a@amail.com", "1999-10-04");

console.log(aluno.exibirInfos());

console.log(admin.exibirInfos());

console.log(docente.exibirInfos());

console.log(admin.criarCurso("Jquery", 10));
console.log(docente.aprovarEstudante("Felipe", "Jquery"));

const dadosFicticios = User.exibirInfosGenericas("Pedro", "p@mail.com");
console.log(dadosFicticios);