SECRET_NUM: int = 20
chutado: int = SECRET_NUM + 1

while chutado != SECRET_NUM:
  chutado = int(input("Digite um número entre 1 e 50 para chutar: "))
  if chutado != SECRET_NUM:
    if chutado > SECRET_NUM:
      print("Muito alto. Tente novamente...")
    else:
      print("Muito baixo. Tente novamente...")

print(f"Você acertou! Número: {SECRET_NUM}")