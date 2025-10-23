from src.modelos.Livro import Livro

class Usuario:
    def __init__(self, nome: str) -> None:
        self.__nome = nome

        self.__email = ""
        self.__livros_emprestados: list[Livro] = []
        self.__limite_emprestimos_max = 3

    @property
    def nome(self) -> str:
        return self.__nome
    
    @property
    def email(self) -> str:
        return self.__email

    @email.setter
    def email(self, email: str) -> None:
        if not email or email.strip() == "":
            raise Exception("Erro, e-mail inválido")

        self.__email = email

    def alterar_limite_emprestimos(self, quantidade: int) -> None:
        if quantidade < 0:
            raise ValueError("Quantidade máxima de empréstimos precisa ser maior que 0!")
        
        self.__limite_emprestimos_max = quantidade

    def emprestar_livro(self, livro: Livro) -> None:
        if len(self.__livros_emprestados) >= self.__limite_emprestimos_max:
            raise Exception("Limíte de empréstimos atingido!")

        livro.emprestar(self)
        self.__livros_emprestados.append(livro)

    def devolver_livro(self, livro: Livro) -> None:
        livro.devolver()
        self.__livros_emprestados.remove(livro)

    def listar_livros(self) -> str:
        livros_detalhes: list[str] = [livro.detalhes() for livro in self.__livros_emprestados]
        return f"\n{"-"*8}\nLivros de {self.__nome}: \n{" - ".join(livros_detalhes)}"
    
    def detalhes(self) -> str:
        return f"****DETALHES DE USUÁRIO****\nNome: {self.__nome}\nE-mail: {self.__email if self.__email else "-"}\nQuantidade de livros emprestados: {len(self.__livros_emprestados)}/{self.__limite_emprestimos_max}"