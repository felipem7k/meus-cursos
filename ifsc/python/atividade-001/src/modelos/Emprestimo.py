from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from src.modelos.Usuario import Usuario

from datetime import datetime, timedelta

class Emprestimo:
    __DIAS_EMPRESTIMO = 10

    def __init__(self, para: Usuario):
        self.__usuario = para

        self.__ate = datetime.now() + timedelta(days=self.__DIAS_EMPRESTIMO)

    @property
    def usuario(self) -> Usuario:
        return self.__usuario
    
    @property
    def ate(self) -> datetime:
        return self.__ate
    
    @property
    def expirado(self) -> bool:
        return datetime.now() >= self.__ate

    def expiracao_formatada(self) -> str:
        return datetime.strftime(self.__ate, "%d/%m/%Y %H:%M:%S")