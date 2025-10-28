import json
import os
from datetime import datetime

from src.modelos.Historico import Historico
from src.modelos.Usuario import Usuario

class HistoricoRepositorio:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    LOGPATH: str = os.path.join(BASE_DIR, '..', '..', 'log', 'historico.log')

    def listar_tudo(self) -> list[list]:
        historicos = []
        with open(self.LOGPATH, 'r', encoding='utf-8') as arquivo:
            for linha in arquivo:
                try:
                    partes = linha.strip().split('|')
                    if len(partes) != 2:
                        continue
                    data, resto = partes

                    nome, descricao = resto.strip().split(':', 1)
                    usuario = Usuario(nome.strip())
                    historico = Historico(usuario, descricao.strip(), datetime.strptime(data, '%d/%m/%Y %H:%M:%S '))
                    historicos.append(historico)
                except Exception as e:
                    print(f"Erro ao processar linha: {linha}\n{e}")
        return historicos


    def adicionar(self, historico: str) -> None:
        with open(self.LOGPATH, "a") as log_file:
            log_file.write(historico)

    def registrar(self, historico: Historico) -> None:
        self.adicionar(f"{historico.detalhes()}\n")