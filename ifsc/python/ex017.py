numeros_input: str = input("Digite uma sequência de números separados por vírgula: ")
numeros_lista: tuple[str] = numeros_input.split(",")

lista_limpa: tuple[int] = [int(numero_string.strip()) for numero_string in numeros_lista]

print(list(set(lista_limpa)))