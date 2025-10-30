from src.modelos.Livro import Livro
from src.modelos.MidiaDigital import MidiaDigital
from src.modelos.Usuario import Usuario
from src.modelos.Biblioteca import Biblioteca

if __name__ == "__main__":
    biblioteca = Biblioteca()

    livro_1 = Livro("Branca de neve", "Os 7 anões", 2009, "romance")
    livro_2 = Livro("Tropa de elite", "Ossoduro di rue", 2010, "terror")
    livro_3 = Livro("Como fazer uma bomba caseira", "Manual do Mundo", 2011, "comedia")
    livro_4 = Livro("Billie Jeans", "Mamonas assassinas", 2025, "terror")
    livro_5 = Livro("Turma da mônica", "Pedro alvares cabral", 1300, "drama")

    midia_digital1 = MidiaDigital("Nemo", "Disney", "mp4", 500)

    usuario_1 = Usuario("Felipe")
    usuario_2 = Usuario("Pedro")

    usuario_1.email = "felipinhodomal@mail.com"

    biblioteca.adicionar_item(livro_1)
    biblioteca.adicionar_item(livro_2)
    biblioteca.adicionar_item(livro_3)
    biblioteca.adicionar_item(livro_4)
    biblioteca.adicionar_item(livro_5)
    biblioteca.adicionar_item(midia_digital1)

    biblioteca.adicionar_usuario(usuario_1)
    biblioteca.adicionar_usuario(usuario_2)
    
    biblioteca.emprestar_item(usuario_1, livro_1)
    biblioteca.emprestar_item(usuario_1, livro_2)
    biblioteca.emprestar_item(usuario_1, livro_3)
    biblioteca.emprestar_item(usuario_1, livro_4)
    biblioteca.emprestar_item(usuario_2, livro_1)
    biblioteca.emprestar_item(usuario_2, midia_digital1)

    biblioteca.devolver_item(usuario_1, livro_3)

    biblioteca.emprestar_item(usuario_1, livro_4)
    biblioteca.emprestar_item(usuario_2, livro_3)

    print(f"{"*"*8} ITENS DISPONÍVEIS {"*"*8}")
    print(biblioteca.listar_itens_disponiveis())
    print(f"{"*"*8} ITENS INDISPONÍVEIS {"*"*8}")
    print(biblioteca.listar_itens_emprestados())
    print(f"{"*"*8} ITENS EXPIRADOS {"*"*8}")
    print(biblioteca.listar_itens_expirados())

    print(livro_3.mais_detalhes())
    print(usuario_1.detalhes())

    print(f"{"*"*8} FILTRANDO POR CATEGORIA {"*"*8}")
    print(biblioteca.listar_itens_por_parametro("categoria", "terror"))
    print(f"{"*"*8} FILTRANDO POR AUTOR {"*"*8}")
    print(biblioteca.listar_itens_por_parametro("autor", "mamonas assassinas"))

    print(f"{"*"*8} MOSTRANDO HISTORICO DE EMPRESTIMO DE ITEM {"*"*8}")
    # print(biblioteca.exibir_historico())
    # print(biblioteca.exibir_historico({
    #     "tipo": "nome",
    #     "valor": "Pedro"
    # }))

    print(biblioteca.relatorio_geral())

    biblioteca.notificar_atrasos()