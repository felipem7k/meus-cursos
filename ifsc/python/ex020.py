# 1
def multiplicacao(a: int, b: int) -> int:
    return a * b

print(multiplicacao(2, 4))

# 2
def verifica_par(num: int) -> int:
    return num % 2 == 0

print(verifica_par(2))

# 3
def contar_vogais(frase: str) -> int:
    vogais: str = "aeiouAEIOU"
    return sum(1 for char in frase if char in vogais)

print(contar_vogais("teste"))

# 4
def fatorial(num: int) -> int:
    fat: int = 1
    atual: int = num
    while atual > 0:
        fat *= atual
        atual -= 1
    return fat

print(fatorial(5))

# 5
def media(numList: tuple[float]) -> float:
    return sum(numList) / len(numList)

print(media((7.5, 8.0, 9.0, 6.5)))
