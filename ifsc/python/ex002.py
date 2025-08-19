salario: int = int(input("Qual seu salário mensal? "))
imposto: int = 5

if salario > 5000:
  imposto = 15

print(salario * (imposto / 100))