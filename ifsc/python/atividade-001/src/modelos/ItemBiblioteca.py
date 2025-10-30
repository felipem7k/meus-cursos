from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from src.modelos.Usuario import Usuario

from src.modelos.Emprestimo import Emprestimo

class ItemBiblioteca:
    def __init__(self, titulo: str, autor: str) -> None:
        self._titulo = titulo
        self._autor = autor
        self._tipo = None

        self._emprestimo = None

    def __str__(self) -> str:
        return f"{self._titulo}"
    
    @property
    def tipo(self) -> str:
        return self._tipo

    @property
    def titulo(self) -> str:
        return self._titulo

    @property
    def disponivel(self) -> str:
        return self._emprestimo == None
    
    @property
    def expirado(self) -> bool:
        if self.disponivel:
            return False
        
        return self._emprestimo.expirado

    @property
    def autor(self) -> str:
        return self._autor
    
    def emprestar(self, usuario: Usuario) -> None:
        if not self.disponivel:
            raise Exception("Item indisponível!")
        
        self._emprestimo = Emprestimo(usuario)

    def devolver(self) -> None:
        if self.disponivel:
            raise Exception("Ops! Este item já foi devolvido.")
        
        self._emprestimo = None

    def emprestado_para(self) -> Usuario|None:
        if self.disponivel:
            return None

        return self._emprestimo.usuario

    def _estado_emprestimo(self):
        if self.disponivel:
            return "disponível"

        return f"em empréstimo com {self._emprestimo.usuario.nome}"

    def detalhes(self) -> str:
        return f"{self._titulo} | Escrito por {self._autor} ({self._estado_emprestimo()})"
    
    def mais_detalhes(self) -> str:
        return f"****INFORMAÇÕES DETALHADAS****\nTipo: {self._tipo}\nTítulo: {self._titulo}\nAutor: {self._autor}\nEmpréstimo: {self._estado_emprestimo()}"