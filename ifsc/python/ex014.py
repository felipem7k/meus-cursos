numeros_input: str = input("Digite uma sequência de números separados por vírgula: ")
numeros_lista: tuple[str] = numeros_input.split(",")

lista_limpa: tuple[str] = [int(numero_string.strip()) for numero_string in numeros_lista]

print(f"A soma dos números é: {sum(lista_limpa)}")