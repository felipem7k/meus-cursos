idade: list[int] = []
idade.append(5)
idade.append(20)
idade.append(15)
idade.append(3)
idade.sort()
print(idade)

print("---")

nomes_tupla: tuple[str] = (
    "Felipe",
    "Pedro"
) #imutavel
sobrenomes_tupla: tuple[str] = (
    "Machado",
    "Silveira"
)
print(nomes_tupla+sobrenomes_tupla)

print("---")

colecao: list[list[str|int]] = []
colecao.append([
    "teste",
    1
])
colecao.append([
    "alo",
    20
])
print(colecao[1][0])

print("---")

palavras: str = "a, e, i, o, u"
palavras_separadas: tuple[str] = palavras.split(", ")
print(palavras_separadas)