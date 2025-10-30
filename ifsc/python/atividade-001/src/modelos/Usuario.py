from src.modelos.ItemBiblioteca import ItemBiblioteca

class Usuario:
    def __init__(self, nome: str) -> None:
        self.__nome = nome

        self.__email = ""
        self.__itens_emprestados: list[ItemBiblioteca] = []
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

    def emprestar_item(self, item: ItemBiblioteca) -> None:
        if len(self.__itens_emprestados) >= self.__limite_emprestimos_max:
            raise Exception("Limíte de empréstimos atingido!")

        item.emprestar(self)
        self.__itens_emprestados.append(item)

    def devolver_item(self, item: ItemBiblioteca) -> None:
        item.devolver()
        self.__itens_emprestados.remove(item)

    def listar_itens(self) -> str:
        itens_detalhes: list[str] = [item.detalhes() for item in self.__itens_emprestados]
        return f"\n{"-"*8}\nItens de {self.__nome}: \n{" - ".join(itens_detalhes)}"
    
    def detalhes(self) -> str:
        return f"****DETALHES DE USUÁRIO****\nNome: {self.__nome}\nE-mail: {self.__email if self.__email else "-"}\nQuantidade de itens emprestados: {len(self.__itens_emprestados)}/{self.__limite_emprestimos_max}"