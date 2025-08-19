nota1: int = int(input("Digite a nota 1: "))
nota2: int = int(input("Digite a nota 2: "))
nota3: int = int(input("Digite a nota 3: "))

ma: float = (nota1 + nota2 + nota3)/3

print(f"Resultado: {ma}")

if ma >= 7:
  print("Aprovado")
elif ma >= 5:
  print("Recuperação")
else:
  print("Reprovado")