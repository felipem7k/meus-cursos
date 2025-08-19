palavra: str = input("Digite uma palavra: ")
vogais: str = "aeiou"
qtd_vogais: int = 0
for letra in palavra.lower():
  if letra in vogais:
    qtd_vogais += 1

print(qtd_vogais)