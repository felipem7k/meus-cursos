from src.modelos.Livro import Livro
from src.modelos.Usuario import Usuario
from src.modelos.Biblioteca import Biblioteca

if __name__ == "__main__":
    biblioteca = Biblioteca()

    livro_1 = Livro("Branca de neve", "Os 7 anões", 2009, "romance")
    livro_2 = Livro("Tropa de elite", "Ossoduro di rue", 2010, "terror")
    livro_3 = Livro("Como fazer uma bomba caseira", "Manual do Mundo", 2011, "comedia")
    livro_4 = Livro("Billie Jeans", "Mamonas assassinas", 2025, "terror")
    livro_5 = Livro("Turma da mônica", "Pedro alvares cabral", 1300, "drama")

    usuario_1 = Usuario("Felipe")
    usuario_2 = Usuario("Pedro")

    usuario_1.email = "felipinhodomal@mail.com"

    biblioteca.adicionar_livro(livro_1)
    biblioteca.adicionar_livro(livro_2)
    biblioteca.adicionar_livro(livro_3)
    biblioteca.adicionar_livro(livro_4)
    biblioteca.adicionar_livro(livro_5)

    biblioteca.adicionar_usuario(usuario_1)
    biblioteca.adicionar_usuario(usuario_2)
    
    biblioteca.emprestar_livro(usuario_1, livro_1)
    biblioteca.emprestar_livro(usuario_1, livro_2)
    biblioteca.emprestar_livro(usuario_1, livro_3)
    biblioteca.emprestar_livro(usuario_1, livro_4)
    biblioteca.emprestar_livro(usuario_2, livro_1)

    biblioteca.devolver_livro(usuario_1, livro_3)

    biblioteca.emprestar_livro(usuario_1, livro_4)
    biblioteca.emprestar_livro(usuario_2, livro_3)

    print(f"{"*"*8} LIVROS DISPONÍVEIS {"*"*8}")
    print(biblioteca.listar_livros_disponiveis())
    print(f"{"*"*8} LIVROS INDISPONÍVEIS {"*"*8}")
    print(biblioteca.listar_livros_emprestados())
    print(f"{"*"*8} LIVROS EXPIRADOS {"*"*8}")
    print(biblioteca.listar_livros_expirados())

    print(livro_3.mais_detalhes())
    print(usuario_1.detalhes())

    print(f"{"*"*8} FILTRANDO POR CATEGORIA {"*"*8}")
    print(biblioteca.listar_livros_por_parametro("categoria", "terror"))
    print(f"{"*"*8} FILTRANDO POR AUTOR {"*"*8}")
    print(biblioteca.listar_livros_por_parametro("autor", "mamonas assassinas"))

    print(f"{"*"*8} MOSTRANDO HISTORICO DE EMPRESTIMO DE LIVROS {"*"*8}")
    print(biblioteca.exibir_historico())
    # print(biblioteca.exibir_historico({
    #     "tipo": "nome",
    #     "valor": "Pedro"
    # }))

    print(biblioteca.relatorio_geral())

    biblioteca.notificar_atrasos()