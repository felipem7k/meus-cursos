from src.modelos.ItemBiblioteca import ItemBiblioteca

class Revista(ItemBiblioteca):
    def __init__(self, titulo: str, autor: str, editora: str, edicao: str, mes: int) -> None:
        super().__init__(titulo, autor)
        self._tipo = "revista"

        self.__editora = editora
        self.__edicao = edicao
        self.__mes = mes

    def mais_detalhes(self) -> str:
        return f"{super().mais_detalhes()}\nEditora: {self.__editora}\nEdição: {self.__edicao}\nMês de publicação: {self.__mes}"