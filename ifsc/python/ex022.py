
import math


MODO_TESTE: bool = True

exercicio_atual = 1
def mostrar_titulo_exercicio():
    global exercicio_atual
    quantidade_espacos = 10
    print(f"\n{"-"*quantidade_espacos} Exercício #{exercicio_atual} {"-"*quantidade_espacos}")
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
from datetime import datetime

class Pessoa:
  def __init__(self, cpf: str, nome: str, idade: int):
    self.__cpf = cpf
    self.__nome = nome
    self.__idade = idade

  @property
  def nome(self) -> str:
     return self.__nome

  @property
  def idade(self) -> int:
     return self.__idade

  def __str__(self) -> str:
    return f"Nome: {self.nome} | Idade: {self.idade} | CPF: {self.__cpf}"

class ContaBancaria:
    def __init__(self, titular: Pessoa):
      self.__titular = titular
      self.__saldo = 0
      self.__historico = []

    def registrar_historico(self, descricao: str):
      self.historico.append({
        "descricao": descricao,
        "data": datetime.now()
      })

    def depositar(self, valor: float):
        if valor <= 0:
          raise Exception("Valor de depósito precisa ser maior que 0!")
       
        self.saldo += valor
        self.registrar_historico("DEPOSITO REALIZADO: R${}".format(str(valor)))

    def sacar(self, valor: float):
        if valor <= 0:
          raise Exception("Valor de saque precisa ser maior que 0!")
        
        if self.saldo < valor:
          raise Exception("Saldo insuficiente para saque.")

        self.saldo -= valor
        self.registrar_historico("SAQUE REALIZADO: R${}".format(str(valor)))

    @property
    def saldo(self) -> float:
      return self.__saldo

    @saldo.setter
    def saldo(self, valor: float):
      if valor < 0:
        return

      self.__saldo = valor

    @property
    def titular(self) -> Pessoa:
      return self.__titular
    
    @property
    def historico(self) -> map:
      return self.__historico
    
    def extrato(self) -> str:
      lista = [f"{datetime.strftime(elemento["data"], "%d/%m/%Y %H:%M:%S")} | {elemento["descricao"]}" for elemento in self.historico]
      return "\n".join(lista)
    
try:
  conta_1 = ContaBancaria(Pessoa("123456789", "Alice", 20))
  conta_1.depositar(1000.00)

  conta_1.sacar(500.00)

  print(f"{"-"*10} EXTRATO {"-"*10}")
  print(conta_1.extrato())

  print("-"*25)

  print(f"Saldo disponível de {conta_1.titular.nome}: R${conta_1.saldo:.2f}")
except Exception as e:
  print(f"[ERRO]: {e}")

mostrar_titulo_exercicio()
class Dispositivo:
  def __init__(self, temperatura: float) -> None:
    self.__temperatura = temperatura

  @property
  def temperatura(self) -> float:
    return self.__temperatura
  
  @temperatura.setter
  def temperatura(self, valor) -> None:
    min_temp, max_temp = 0, 100
    if valor < min_temp:
      valor = min_temp
    elif valor > max_temp:
      valor = max_temp
    self.__temperatura = valor

dispositivo = Dispositivo(30)
dispositivo.temperatura = 10
dispositivo.temperatura = 200

print(f"Temperatura atual do dispositivo: {dispositivo.temperatura}°C")

mostrar_titulo_exercicio()

import hashlib

class Usuario():
  def __init__(self):
    self.__senha = None

  def definir_senha(self, senha: str) -> None:
    hash_senha = hashlib.sha256(senha.encode()).hexdigest()
    self.__senha = hash_senha

  def autenticar(self, senha: str) -> bool:
    hash_senha = hashlib.sha256(senha.encode()).hexdigest()
    return hash_senha == self.__senha
  
usuario = Usuario()
usuario.definir_senha("12345")
if usuario.autenticar("321"):
  print("Logado com sucesso!")
else:
  print("Usuário ou senha inválidos.")

mostrar_titulo_exercicio()

class Retangulo:
  __largura = 0
  __altura = 0

  def __init__(self, largura: float, altura: float):
    self.largura = largura
    self.altura = altura

  def __validar_comprimento(self, comprimento: float) -> float:
    if comprimento < 0:
      return False

    return True

  @property
  def largura(self) -> float:
    return self.__largura

  @largura.setter
  def largura(self, comprimento: float) -> None:
    if not self.__validar_comprimento(comprimento):
      raise ValueError("Largura precisa ser maior que 0!")
    self.__largura = comprimento

  @property
  def altura(self) -> float:
     return self.__altura
  
  @altura.setter
  def altura(self, comprimento: float) -> None:
    if not self.__validar_comprimento(comprimento):
      raise ValueError("Altura precisa ser maior que 0!")
    self.__altura = comprimento

try:
  retangulo = Retangulo(3, 6)
  print(f"Retangulo: l={retangulo.largura}, a={retangulo.altura}")
  retangulo.largura = -1
  print(f"Retangulo: l={retangulo.largura}, a={retangulo.altura}")
except ValueError as e:
  print(f"[ERRO AO ADICIONAR VALOR]: {e}")

mostrar_titulo_exercicio()

class Produto:
  __nome = ""
  __preco = 0

  def __init__(self, nome, preco):
    self.nome = nome
    self.preco = preco

  @property
  def nome(self) -> str:
    return self.__nome
  
  @nome.setter
  def nome(self, nome: str) -> None:
    self.__nome = nome

  @property
  def preco(self) -> bool:
    return self.__preco
  
  @preco.setter
  def preco(self, preco: float) -> None:
    if preco < 0:
      raise ValueError("Preço precisa ser maior que 0!")
    
    self.__preco = preco

  def exibir_detalhes(self):
    return f"Nome: {self.nome} | Preço: {self.preco}"
  
try:
  mouse = Produto("Mouse Logitech", 300)
  print(mouse.exibir_detalhes())
  mouse.nome = "Mouse Razer"
  mouse.preco = 500
  print(mouse.exibir_detalhes())
  mouse.preco = -1
  print(mouse.exibir_detalhes())
except ValueError as e:
  print(f"Erro ao cadastrar produto: {e}")