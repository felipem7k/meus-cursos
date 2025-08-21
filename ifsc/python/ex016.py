palavras_input: str = input("Digite uma sequência de palavras separados por vírgula: ")
palavra_contar: str = input("Palavra para contar: ").lower()
palavras_lista: tuple[str] = palavras_input.split(",")

lista_limpa: tuple[str] = [palavra.lower().strip() for palavra in palavras_lista]

quantidade_da_palavra: int = lista_limpa.count(palavra_contar)
print(f"Inclui {quantidade_da_palavra} vez(es) a palavra {palavra_contar}")