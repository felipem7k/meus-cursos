class Restaurante:
    restaurantes = []
    
    def __init__(self, nome, categoria):
        self._nome = nome.title()
        self.categoria = categoria.upper()
        self._ativo = False
        Restaurante.restaurantes.append(self)
    
    def __str__(self):
        return f'{self._nome.ljust(25)} | {self.categoria.ljust(25)} | {self.ativo.ljust(25)}'
    
    @classmethod
    def listar_restaurantes(cls):
        print(f"{'Nome:'.ljust(25)} | {'Categoria: '.ljust(25)} | {'Aberto: '.ljust(25)}")
        for restaurante in cls.restaurantes:
            print(restaurante)

    @property
    def ativo(self):
        return 'sim' if self._ativo else 'não'
    
    def alternar_estado(self):
        self._ativo = not self._ativo
    
restaurante_praca = Restaurante('Praça','Gourmet' )
restaurante_praca.alternar_estado()
restaurante_pizza = Restaurante('Pizza Express', 'Italiana')

Restaurante.listar_restaurantes()