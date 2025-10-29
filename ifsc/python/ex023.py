import math
from datetime import date, timedelta

MODO_TESTE: bool = True

exercicio_atual = 1
def mostrar_titulo_exercicio():
    global exercicio_atual
    quantidade_espacos = 10
    print(f"\n{"-"*quantidade_espacos} Exercício #{exercicio_atual} {"-"*quantidade_espacos}")
    exercicio_atual += 1

mostrar_titulo_exercicio()
class FiguraGeometrica:
    def area(self) -> float:
        pass
    def perimetro(self) -> float:
        pass

class Retangulo(FiguraGeometrica):
    def __init__(self, base: float, altura: float) -> None:
        self.__base = base
        self.__altura = altura
    
    def area(self) -> float:
        return self.__base * self.__altura
    
    def perimetro(self) -> float:
        return 2 * (self.__base + self.__altura)
    
class Circulo(FiguraGeometrica):
    def __init__(self, raio: float) -> None:
        self.__raio = raio

    def area(self):
        return math.pi * (self.__raio) ** 2
    
    def perimetro(self):
        return 2 * math.pi * self.__raio
    
class Quadrado(FiguraGeometrica):
    def __init__(self, lado: float):
        self.__lado = lado

    def area(self):
        return self.__lado ** 2
    
    def perimetro(self):
        return 4 * self.__lado
    
retangulo = Retangulo(2, 5)
print(retangulo.area())
print(retangulo.perimetro())

circulo = Circulo(3)
print(circulo.area())
print(circulo.perimetro())

quadrado = Quadrado(4)
print(quadrado.area())
print(quadrado.perimetro())

mostrar_titulo_exercicio()
class Produto:
    def __init__(self, nome: str, preco: float) -> None:
        self.__nome = nome
        self.__preco = preco

    def preco_total(self) -> float:
        return self.__preco - (self.__preco * self._desconto())

    def _desconto(self) -> float:
        return 0

class ProdutoEletronico(Produto):
    __promocao = 0
    def __init__(self, nome: str, preco: float, promocao: float = None, garantia: bool = False) -> None:
        super().__init__(nome, preco)
        self.__garantia = garantia
        if promocao and promocao > 0 and promocao <= 1:
            self.__promocao = promocao

    def _desconto(self) -> float:
        return self.__promocao

class ProdutoAlimenticio(Produto):
    def __init__(self, nome: str, preco: float, data_validade: date) -> None:
        super().__init__(nome, preco)
        self.__data_validade = data_validade

    def _desconto(self) -> float:
        tempo_restante = (self.__data_validade - date.today()).days
        if tempo_restante > 5:
            return 0
        return 0.5

produto_eletronico = ProdutoEletronico("Mouse", 50, promocao=0.1, garantia=True)
produto_alimenticio = ProdutoAlimenticio("Banana", 3, date.today() + timedelta(days=15))
print(produto_eletronico.preco_total())
print(produto_alimenticio.preco_total())