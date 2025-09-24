import math
import calendar
from datetime import datetime

MODO_TESTE: bool = True

exercicio_atual = 1
def mostrar_titulo_exercicio():
    global exercicio_atual
    quantidade_espacos = 10
    print(f"{"-"*quantidade_espacos} Exercício #{exercicio_atual} {"-"*quantidade_espacos}")
    exercicio_atual += 1

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
raio_esfera: float = 3.0
if not MODO_TESTE:
    raio_esfera = float(input("Qual o raio da esfera? "))
volume_esfera: float = (4/3) * (math.pi) * (raio_esfera**3) 

print(volume_esfera)

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
data: datetime = datetime.now()
print(data.strftime("%d/%m/%Y %H:%M:%S"))

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
primeiro_nome: str = "Felipe"
ultimo_nome: str = "Machado"
if not MODO_TESTE:
    primeiro_nome = input("Primeiro nome: ")
    ultimo_nome = input("Ultimo nome: ")
print(f"{primeiro_nome[::-1]} {ultimo_nome[::-1]}")

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
numeros: str = "1, 5, 3, 4"
if not MODO_TESTE:
    numeros = input("Digite uma sequencia de números separados por vigula: ")

lista_de_numeros: list[int] = [int(numero.strip()) for numero in numeros.split(",")]

print(f"Lista: {lista_de_numeros}")
print(f"Tupla: {tuple(lista_de_numeros)}")

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
nome_arquivo: str = "app.py"
if not MODO_TESTE:
    nome_arquivo = input("Digite o nome do arquivo: ")

print(nome_arquivo.split(".")[1])

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
cores: list[str] = ["azul", "verde", "marrom", "vermelho"]
print(cores[0], cores[-1])

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
valor: int = 4
if not MODO_TESTE:
    valor = int("Digite o valor desejado: ")

print(valor + (valor**2) + (valor**3))

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
mes: int = 2
ano: int = 2025
if not MODO_TESTE:
    mes = int(input("Digite o mês: "))
    ano = int(input("Digite o ano: "))

print(calendar.month(ano, mes))

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
data1: str = "01/03/2020"
data2: str = "01/05/2020"
if not MODO_TESTE:
    data1 = input("Digite a primeira data: (dd/mm/aaaa)")
    data2 = input("Digite a segunda data: (dd/mm/aaaa)")

data1_formatada: str = datetime.strptime(f"{data1.split("/")[2]}-{data1.split("/")[1]}-{data1.split("/")[0]}", '%Y-%m-%d')
data2_formatada: str = datetime.strptime(f"{data2.split("/")[2]}-{data2.split("/")[1]}-{data2.split("/")[0]}", '%Y-%m-%d')

print(abs((data2_formatada - data1_formatada).days))

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
DIFERENCA_PARA: int = 17
valor2: int = 20
if not MODO_TESTE:
    valor2 = int(input("Digite um valor: "))

def calcular_diferenca(numero: int) -> int:
    diferenca: int = DIFERENCA_PARA - numero
    if numero <= DIFERENCA_PARA:
        return diferenca
    return abs(diferenca * 2)

print(calcular_diferenca(valor2))

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
numero: int = 880
if not MODO_TESTE:
    numero = int(input("Digite um número: "))

proximo_a_1000: bool = abs(numero - 1000) <= 100
proximo_a_2000: bool = abs(numero - 2000) <= 100

if proximo_a_1000:
    print("Está próximo a 1000.")
elif proximo_a_2000:
    print("Está próximo a 2000.")
else:
    print("Não está próximo a nenhum dos dois.")

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
texto: str = "Texto de exemplo\n"
qtd_copias: int = 10
if not MODO_TESTE:
    texto = input("Digite um texto: ")
    qtd_copias = int("Quantidade de cópias")

print(texto*qtd_copias)

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
texto2: str = "tração"
if not MODO_TESTE:
    texto2 = input("Escreva uma palavra: ")

if texto2[:2] == "ab":
    print(texto2)
else:
    print(f"ab{texto2}")

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
numeros1: str = "1, 3, 3, 4, 3"
numero1: int = 3
if not MODO_TESTE:
    numeros1 = input("Digite a lista de números, separados por vírgula: ")
    numero1 = int(input("Digite o numero desejado: "))

lista_de_numeros1 = [int(numero_alvo.strip()) for numero_alvo in numeros1.split(",")]

print(lista_de_numeros1.count(numero1))

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
numero2: int = 4
texto3: str = "abcdef"
if not MODO_TESTE:
    numero2 = abs(int(input("Difite a quantidade de vezes a printar: ")))
    texto3 = input("Digite o texto a ser printado: ")

if len(texto3) < 2:
    print(texto3*numero2)
else:
    primeiros_caracteres: int = texto3[:2]
    print(primeiros_caracteres*numero2)

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
vogais: str = "aeiou"
letra: str = "a"
if not MODO_TESTE:
    letra = input("Digite a letra desejada: ")

print((letra.lower() in vogais) and "É vogal" or "É consoante")

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
lista_de_strings: list[str] = ["a", "b", "c", "d", "e"]
letras_concatenadas: str = ""
for letra in lista_de_strings:
    letras_concatenadas += letra
print(letras_concatenadas)

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
lista_de_inteiros: list[str] = [1, 2, 3, 4, 5]
numeros_concatenados: str = ""
for letra in lista_de_inteiros:
    numeros_concatenados += str(letra)
print(numeros_concatenados)

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
lista_de_elementos: list[int] = [2, 12, 7, 10]
print(max(lista_de_elementos))

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
maior_elemento: int = max(lista_de_elementos)
lista_de_elementos.remove(maior_elemento)
print(max(lista_de_elementos))

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
numeros2: str = "23, 41, 22, 31, 33, 34, 20"
if not MODO_TESTE:
    numeros2 = input("Digite a lista de numeros")

lista_de_numeros2: list[int] = [int(numero.strip()) for numero in numeros2.split(",")]
for numero in lista_de_numeros2:
    if numero % 2 == 0:
        print(numero)

for numero in lista_de_numeros2:
    if numero % 2 > 0:
        print(numero)

mostrar_titulo_exercicio() # PRÓXIMO EXERCICIO
lista1: list[str] = ["a", "e", "i"]
lista2: list[str] = ["d", "e", "r"]
lista3: list[str] = lista1 + lista2
lista3.sort()
print(lista3)