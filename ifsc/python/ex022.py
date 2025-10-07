
import math


MODO_TESTE: bool = True

exercicio_atual = 1
def mostrar_titulo_exercicio():
    global exercicio_atual
    quantidade_espacos = 10
    print(f"{"-"*quantidade_espacos} Exercício #{exercicio_atual} {"-"*quantidade_espacos}")
    exercicio_atual += 1

mostrar_titulo_exercicio()
class Circulo:
    def __init__(self, raio: float):
      self.raio = raio

    def area(self) -> float:
      return math.pi * (self.raio ** 2)

    def perimetro(self) -> float:
      return 2 * math.pi * self.raio

circulo = Circulo(3)
print(circulo.area())
print(circulo.perimetro())

mostrar_titulo_exercicio()
class Ponto:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def distancia(self, outro_ponto: "Ponto") -> float:
        return math.sqrt(((self.x - outro_ponto.x) ** 2) + ((self.y - outro_ponto.y) ** 2))

ponto = Ponto(0, 0)
print(ponto.distancia(Ponto(4, 3)))

mostrar_titulo_exercicio()
class Quadrado:
    def __init__(self, lado: float = 4):
      self.lado = lado

    def area(self) -> float:
       return self.lado * self.lado
    
    def perimetro(self) -> float:
       return self.lado * 4
    
    def alterarLado(self, lado: float):
       self.lado = lado

    def eh_igual(self, quadrado: "Quadrado") -> bool:
        return self == quadrado

    def eh_perfeito(self) -> bool:
       return self.lado % 1 == 0
    
    def diagonal(self) -> float:
       return self.lado * math.sqrt(2)
    
    def redimensionar(self, fator: float):
       self.lado = self.lado * fator
    
quadrado = Quadrado(5)
novo_quadrado = Quadrado(3)
quadrado.redimensionar(2)
print(quadrado.eh_igual(novo_quadrado))
print(quadrado.eh_perfeito())
print(quadrado.diagonal())

mostrar_titulo_exercicio()
class Pessoa:
  def __init__(self, cpf: str, nome: str, idade: int):
    self.cpf = cpf
    self.nome = nome
    self.idade = idade

  def __str__(self) -> str:
    return f"Nome: {self.nome} | Idade: {self.idade} | CPF: {self.cpf}"

class ContaBancaria:
    def __init__(self, titular: Pessoa):
      self.__titular = titular
      self.__saldo = 0

    def depositar(self, valor: float):
        if valor <= 0:
          raise Exception("Valor de depósito precisa ser maior que 0!")
       
        self.__saldo += valor

    def sacar(self, valor: float):
        if valor <= 0:
          raise Exception("Valor de saque precisa ser maior que 0!")
        
        if self.__saldo < valor:
          raise Exception("Saldo insuficiente para saque.")

        self.__saldo -= valor

    def pegar_saldo(self) -> float:
      return self.__saldo
    
    def pegar_titular(self) -> Pessoa:
      return self.__titular

try:
  conta_1 = ContaBancaria(Pessoa("123456789", "Alice", 20))
  valor_deposito = 1000.00
  conta_1.depositar(valor_deposito)
  print(f"Depósito de R${valor_deposito:.2f} realizado")

  valor_saque = 500.00
  conta_1.sacar(valor_saque)
  print(f"Saque de R$ {valor_saque:.2f} realizado")

  print(f"Saldo disponível de ({conta_1.pegar_titular()}): R$ {conta_1.pegar_saldo():.2f}")
except Exception as e:
  print(f"[ERRO]: {e}")