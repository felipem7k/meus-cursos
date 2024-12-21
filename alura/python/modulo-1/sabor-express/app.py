import os

restaurantes = [
    {
        "nome": "Praça",
        "categoria": "Japonesa",
        "ativo": False
    },
    {
        "nome": "Pizza Suprema",
        "categoria": "Pizza",
        "ativo": True
    },
    {
        "nome": "Cantina",
        "categoria": "Italiana",
        "ativo": False
    }
]

def exibir_nome_do_programa():
    """
    Função responsável por exibir o nome do programa.
    """
    print("""
        𝕊𝕒𝕓𝕠𝕣 𝕖𝕩𝕡𝕣𝕖𝕤𝕤
        """)

def exibir_opcoes():
    """
    Função responsável por exibir as opções do menu principal.
    """
    print("1. Cadastrar restaurante")
    print("2. Listar restaurantes")
    print("3. Alternar estado do restaurante")
    print("4. Sair\n")

def exibir_subtitulo(texto):
    """
    Função responsável por exibir um subtítulo com o texto fornecido.
    
    Args:
        texto (str): Texto a ser exibido como subtítulo.
    """
    os.system("cls")
    linha = "*" * (len(texto))
    print(linha)
    print(f"{texto}\n")
    print(linha)

def voltar_ao_menu_principal():
    """
    Função responsável por voltar ao menu principal após uma ação.
    """
    input("\nDigite uma tecla para voltar ao menu principal ")
    main()

def finalizar_app():
    """
    Função responsável por finalizar o programa.
    """
    exibir_subtitulo("Programa finalizado.")

def opcao_invalida():
    """
    Função responsável por tratar a seleção de uma opção inválida no menu.
    """
    print("Opção inválida!\n")
    voltar_ao_menu_principal()

def cadastrar_novo_restaurante():
    """
    Função responsável por cadastrar um novo restaurante.
    
    Inputs:
    - Nome do restaurante (str)
    - Categoria do restaurante (str)

    Outputs:
    - Adiciona um novo restaurante à lista de restaurantes.
    """ 
    exibir_subtitulo("Cadastro de novos restaurantes")

    nome_do_restaurante = input("Digite o nome do restaurante que deseja cadastrar: ")
    categoria = input(f"Digite o nome da categoria do restaurante '{nome_do_restaurante}': ")
    dados_do_restaurante = {
        "nome": nome_do_restaurante,
        "categoria": categoria,
        "ativo": False
    }

    restaurantes.append(dados_do_restaurante)
    print(f"Restaurante '{nome_do_restaurante}' cadastrado com sucesso!")

    voltar_ao_menu_principal()

def listar_restaurantes():
    """
    Função responsável por listar todos os restaurantes cadastrados.
    
    Outputs:
    - Exibe a lista de restaurantes cadastrados com seu status.
    """
    exibir_subtitulo("Listando os restaurantes")

    print(f"{"Nome do restaurante".ljust(22)} | {"Categoria".ljust(20)} | Status")
    for restaurante in restaurantes:
        nome = restaurante["nome"]
        categoria = restaurante["categoria"]
        ativo = "Ativado" if restaurante["ativo"] else "Desativado"

        print(f"- {nome.ljust(20)} | {categoria.ljust(20)} | {ativo}")

    voltar_ao_menu_principal()

def alternar_estado_restaurante():
    """
    Função responsável por alternar o estado (ativo/inativo) de um restaurante.
    
    Inputs:
    - Nome do restaurante (str)

    Outputs:
    - Alterna o estado do restaurante com base no nome fornecido.
    """
    exibir_subtitulo("Alternando estado do restaurante")

    nome_restaurante = input("Digite o nome do restaurante que deseja alternar o estado: ")
    restaurante_encontrado = False

    for restaurante in restaurantes:
        if nome_restaurante == restaurante["nome"]:
            restaurante_encontrado = True
            restaurante["ativo"] = not restaurante["ativo"]
            mensagem = f"O restaurante {nome_restaurante} foi ativado com sucesso" if restaurante["ativo"] else f"O restaurante {nome_restaurante} foi desativado com sucesso"
            print(mensagem)
    if not restaurante_encontrado:
        print("O restaurante não foi encontrado")

    voltar_ao_menu_principal()

def escolher_opcao():
    """
    Função responsável por escolher uma opção do menu principal e executá-la.
    """
    try:
        opcao_escolhida = int(input("Escolha uma opção: "))
        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            alternar_estado_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()
        else:
            opcao_invalida()
    except:
        opcao_invalida()

def main():
    """
    Função principal do programa. Exibe o nome do programa, as opções e permite escolher e executar uma opção.
    """
    os.system("cls")
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcao()

if __name__ == "__main__":
    main()
