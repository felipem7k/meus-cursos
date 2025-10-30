from src.modelos.ItemBiblioteca import ItemBiblioteca

class MidiaDigital(ItemBiblioteca):
    def __init__(self, titulo: str, autor: str, formato: str, tamanho: float) -> None:
        super().__init__(titulo, autor)
        self._tipo = "midia digital"

        self.__formato = formato
        self.__tamanho = tamanho

    def mais_detalhes(self) -> str:
        return f"{super().mais_detalhes()}\nFormato: .{self.__formato}\nTamanho: {self.__tamanho}Mb"