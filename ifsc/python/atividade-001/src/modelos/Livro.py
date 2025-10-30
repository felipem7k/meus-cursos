from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from src.modelos.Usuario import Usuario

from src.modelos.Emprestimo import Emprestimo
from src.modelos.ItemBiblioteca import ItemBiblioteca

class Livro(ItemBiblioteca):
    def __init__(self, titulo: str, autor: str, ano: int, categoria: str) -> None:
        super().__init__(titulo, autor)
        self._tipo = "livro"

        self.__ano = ano
        self.__categoria = categoria

    def __str__(self) -> str:
        return f"{self._titulo} ({self.__ano})"
    
    @property
    def categoria(self) -> str:
        return self.__categoria

    @categoria.setter
    def categoria(self, categoria: str) -> None:
        if not categoria or categoria == "":
            raise Exception("Erro, categoria invalida!")
        
        self.__categoria = categoria

    def mais_detalhes(self) -> str:
        return f"{super().mais_detalhes()}\nAno: {self.__ano}\nCategoria: {self.__categoria}"