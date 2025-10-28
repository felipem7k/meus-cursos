from src.modelos.Livro import Livro
from src.modelos.Usuario import Usuario
from src.modelos.Historico import Historico
from src.repositorios.HistoricoRepositorio import HistoricoRepositorio

class Biblioteca:
    def __init__(self):
        self.__livros: list[Livro] = []
        self.__usuarios: list[Usuario] = []
        self.__historico_repositorio = HistoricoRepositorio()

        self.__limite_de_emprestimos = 3

    def __registrar_historico(self, usuario: Usuario, descricao: str) -> None:
        self.__historico_repositorio.registrar(Historico(usuario, descricao))

    def exibir_historico(self, filtro: map|None = None) -> None:
        historico_emprestimos = self.__historico_repositorio.listar_tudo()
        if filtro and filtro["tipo"] == "nome":
            historico_emprestimos = filter(lambda historico: historico.usuario.nome == filtro["valor"], historico_emprestimos)

        return "\n".join([historico.detalhes() for historico in historico_emprestimos])

    def adicionar_livro(self, livro: Livro) -> None:
        if livro in self.__livros:
            raise Exception("Livro já adicionado!")

        self.__livros.append(livro)

    def adicionar_usuario(self, usuario: Usuario) -> None:
        if usuario in self.__usuarios:
            raise Exception("Usuário já adicionado")
    
        self.__usuarios.append(usuario)

    def emprestar_livro(self, usuario: Usuario, livro: Livro) -> str:
        try:
            if livro not in self.__livros:
                raise Exception("Livro não disponível na biblioteca.")
            
            if usuario not in self.__usuarios:
                raise Exception("Usuário não registrado")

            if len(self.__filtrar_por_emprestimo(True)) >= self.__limite_de_emprestimos:
                raise Exception("Limíte de empréstimos da biblioteca atingido")

            usuario.emprestar_livro(livro)

            self.__registrar_historico(usuario, f"Livro '{livro.titulo}' emprestado.")
        except Exception as e:
            print(f"Erro ao emprestar livro {livro.titulo} para {usuario.nome}: {e}")
        
    def devolver_livro(self, usuario: Usuario, livro: Livro) -> str:
        try:
            if usuario not in self.__usuarios:
                raise Exception("Usuário não registrado")

            usuario.devolver_livro(livro)
            self.__livros.append(livro)

            self.__registrar_historico(usuario, f"Livro '{livro.titulo}' devolvido.")
        except Exception as e:
            print(f"Erro ao devolver livro {livro.titulo} para {usuario.nome}: {e}")

    def __encontrar(self, parametro: str, valor: str) -> list[Livro]:
        livros_filtrados = list(filter(lambda livro: str(getattr(livro, parametro)).strip().lower() in str(valor).strip().lower(), self.__livros))
        return livros_filtrados

    def listar_livros_por_parametro(self, parametro: str, valor: str|int|float) -> str:
        return "\n".join([f"- {livro.detalhes()}" for livro in self.__encontrar(parametro, valor)])

    def __filtrar_por_emprestimo(self, emprestado: bool) -> list[Livro]:
        return list(filter(lambda l: (not emprestado and l.disponivel) or (emprestado and not l.disponivel), self.__livros))

    def __filtrar_por_expirado(self, expirado: bool) -> list[Livro]:
        return list(filter(lambda l: (not expirado and not l.expirado) or (expirado and l.expirado), self.__livros))

    def listar_livros_disponiveis(self) -> str:
        return "\n".join([f"- {livro.detalhes()}" for livro in self.__filtrar_por_emprestimo(True)])
    
    def listar_livros_emprestados(self) -> str:
        return "\n".join([f"- {livro.detalhes()}" for livro in self.__filtrar_por_emprestimo(False)])

    def listar_livros_expirados(self) -> str:
        return "\n".join([f"- {livro.detalhes()}" for livro in self.__filtrar_por_expirado(True)])
    
    def relatorio_geral(self) -> str:
        livros_em_emprestimo = len(self.__filtrar_por_emprestimo(True))
        livros_disponieis = len(self.__filtrar_por_emprestimo(False))
        return f"{"*"*8} RELATÓRIO GERAL DA BIBLIOTECA {"*"*8}\nTotal de livros: {len(self.__livros)}\nQuantidade de usuários: {len(self.__usuarios)}\nTotal de livros em empréstimo: {livros_em_emprestimo}\nTotal de livros disponíveis: {livros_disponieis}"
    
    def enviar_email(self, usuario: Usuario, descricao: str) -> bool:
        if not usuario.email:
            raise Exception(f"{usuario.nome} não possui e-mail.")
        
        print(f"{descricao} enviado para {usuario.email}")

    def notificar_atrasos(self) -> str:
        livros_expirados = self.__filtrar_por_expirado(True)

        for livro in livros_expirados:
            try:
                emprestado_para = livro.emprestado_para()
                if not emprestado_para:
                    continue

                self.enviar_email(emprestado_para, f"Livro {livro.titulo} está atrasado!")
            except Exception as e:
                print(f"Erro ao notificar usuario: {e}")