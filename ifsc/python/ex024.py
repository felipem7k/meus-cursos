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

valor1: int = 3
valor2: int = 4
if not MODO_TESTE:
    valor1 = int(input("Valor 1? "))
    valor2 = int(input("Valor 2? "))

soma: int = valor1 + valor2

print(soma)

mostrar_titulo_exercicio()

valor: int = 5
if not MODO_TESTE:
    valor = int(input("Digite um número: "))

def eh_impar(val: int) -> bool:
    return val % 2 != 0

print(f"{valor} {eh_impar(valor) and "é" or "não é"} impar.")

mostrar_titulo_exercicio()

for i in range(1, 11):
    print(i)

mostrar_titulo_exercicio()

texto1: str = "a"
texto2: str = "b"

if not MODO_TESTE:
    texto1 = input("Texto 1? ")
    texto2 = input("Texto 2? ")

sao_iguais: bool = texto1 == texto2

print(f"{texto1} e {texto2} {sao_iguais and "são" or "não são"} iguais.")

mostrar_titulo_exercicio()

numero: int = 5

if not MODO_TESTE:
    numero = int(input("Digite um número: "))

print(f"O fatorial de {numero} é {math.factorial(numero)}")

mostrar_titulo_exercicio()

lista: list = [12, 323, 421, 5, 3]

if not MODO_TESTE:
    lista = []
    atual: int = 1
    while atual > 0:
        atual = int(input("Digite um numero, ou 0 para finalizar"))
        lista.append(atual)

maior_numero: int = max(lista)

print(maior_numero)

mostrar_titulo_exercicio()


def eh_primo(n: int) -> bool:
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    # Verifica divisores ímpares até a raiz quadrada
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True

numero1: int = 5
if not MODO_TESTE:
    numero1 = int(input("Número? "))

print(f"{numero1} {eh_primo(numero1) and "é" or "não é"} primo!")

mostrar_titulo_exercicio()

soma: int = 0
for i in range(1, 101):
    if eh_impar(i):
        soma += i

print(soma)  

mostrar_titulo_exercicio()

# Lê as palavras digitadas separadas por espaço
entrada = input("Digite numeros separados por espaço: ")

# Transforma a string em lista
numeros = [int(x) for x in entrada.split()]

# Dicionário para armazenar as contagens
contagem = []

# Percorre cada palavra
for numero in numeros:
    print(numero)
    if numero not in contagem: 
        contagem.append(numero)

# Mostra o resultado
print(contagem)