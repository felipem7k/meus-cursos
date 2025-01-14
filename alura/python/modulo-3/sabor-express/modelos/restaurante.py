from modelos.avaliacao import Avaliacao
from modelos.cardapio.item_cardapio import ItemCardapio

class Restaurante:
    restaurantes = []
    
    def __init__(self, nome, categoria):
        self._nome = nome.title()
        self.categoria = categoria.upper()
        self._ativo = False
        self._avaliacoes = []
        self._cardapio = []
        Restaurante.restaurantes.append(self)
    
    def __str__(self):
        return f'{self._nome.ljust(25)} | {self.categoria.ljust(25)} | {self.ativo.ljust(25)} | {str(self.media_avaliacoes).ljust(25)}'
    
    @classmethod
    def listar_restaurantes(cls):
        print(f"{'Nome:'.ljust(25)} | {'Categoria: '.ljust(25)} | {'Aberto: '.ljust(25)} | {'Média aval.: '.ljust(25)}")
        for restaurante in cls.restaurantes:
            print(restaurante)

    @property
    def ativo(self):
        return 'sim' if self._ativo else 'não'
    
    def alternar_estado(self):
        self._ativo = not self._ativo
        
    def receber_avaliacao(self, cliente, nota):
        if nota < 0:
            nota = 0
        elif nota > 5:
            nota = 5
        avaliacao = Avaliacao(cliente, nota)
        self._avaliacoes.append(avaliacao)
        
    @property
    def media_avaliacoes(self):
        quantidade_de_notas = len(self._avaliacoes)
        
        if quantidade_de_notas < 1:
            return 5
        soma_das_notas = sum(avaliacao._nota for avaliacao in self._avaliacoes)
        return round(soma_das_notas / quantidade_de_notas, 1)
    
    def adicionar_item_ao_cardapio(self, item):
        if isinstance(item, ItemCardapio):
            self._cardapio.append(item)
    
    @property
    def exibir_cardapio(self):
        print(f'Cardapio do restaurante {self._nome}\n')
        for i, item in enumerate(self._cardapio, start=1):
            mensagem = f'{i}. Nome: {item._nome} | Preço: R$ {item._preco}'
            if hasattr(item, 'descricao'):
                mensagem += f'{i}. Descrição: {item.descricao}'
            elif hasattr(item, 'tamanho'):
                mensagem += f'{i}. Tamanho: {item.tamanho}'
            print(mensagem)
# restaurante_praca = Restaurante('Praça','Gourmet' )
# restaurante_praca.alternar_estado()
# restaurante_pizza = Restaurante('Pizza Express', 'Italiana')

# Restaurante.listar_restaurantes()