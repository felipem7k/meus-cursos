from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from src.modelos.Usuario import Usuario

from src.modelos.Emprestimo import Emprestimo

class Livro:
    def __init__(self, titulo: str, autor: str, ano: int, categoria: str) -> None:
        self.__titulo = titulo
        self.__autor = autor
        self.__ano = ano
        self.__categoria = categoria

        self.__emprestimo = None

    def __str__(self) -> str:
        return f"{self.__titulo} ({self.__ano})"

    @property
    def titulo(self) -> str:
        return self.__titulo

    @property
    def disponivel(self) -> str:
        return self.__emprestimo == None
    
    @property
    def expirado(self) -> bool:
        if self.disponivel:
            return False
        
        return self.__emprestimo.expirado

    @property
    def autor(self) -> str:
        return self.__autor
    
    @property
    def categoria(self) -> str:
        return self.__categoria

    @categoria.setter
    def categoria(self, categoria: str) -> None:
        if not categoria or categoria == "":
            raise Exception("Erro, categoria invalida!")
        
        self.__categoria = categoria

    def emprestar(self, usuario: Usuario) -> None:
        if not self.disponivel:
            raise Exception("Livro indisponível!")
        
        self.__emprestimo = Emprestimo(usuario)

    def devolver(self) -> None:
        if self.disponivel:
            raise Exception("Ops! Este livro já foi devolvido.")
        
        self.__emprestimo = None

    def __estado_emprestimo(self):
        if self.disponivel:
            return "disponível"

        return f"em empréstimo com {self.__emprestimo.usuario.nome}"

    def detalhes(self) -> str:
        return f"{self.__titulo} | Escrito por {self.__autor} ({self.__estado_emprestimo()})"
    
    def mais_detalhes(self) -> str:
        return f"****INFORMAÇÕES DETALHADAS****\nTítulo: {self.__titulo}\nAutor: {self.__autor}\nCategoria: {self.__categoria}\nAno: {self.__ano}\nEmpréstimo: {self.__estado_emprestimo()}"