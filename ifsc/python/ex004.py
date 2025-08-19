idade: int = int(input("Qual a sua idade? "))
pais: str = input("Digite seu pais (Brasil ou EUA): ").strip().lower()
maior: bool = False

if idade >= 18:
  if pais == "brasil":
    maior = True
  else:
    if idade >= 21 and pais == "eua":
      maior = True

if pais != "brasil" and pais != "eua":
  print("País não encontrado. Tente novamente.")
else:
  print(maior and f"Você é maior de idade no país {pais.title()}" or f"Você é menor de idade no país {pais.title()}")