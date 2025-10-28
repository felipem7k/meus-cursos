from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from src.modelos.Usuario import Usuario
from datetime import datetime

class Historico:
    def __init__(self, usuario: Usuario, descricao: str, data: datetime|None = datetime.now()):
        self.__descricao = descricao
        self.__usuario = usuario
        self.__data = data

    @property
    def usuario(self) -> Usuario:
        return self.__usuario

    def detalhes(self):
        return f"{datetime.strftime(self.__data, "%d/%m/%Y %H:%M:%S")} | {self.__usuario.nome}: {self.__descricao}"