from src.modelos.ItemBiblioteca import ItemBiblioteca
from src.modelos.Usuario import Usuario
from src.modelos.Historico import Historico
from src.repositorios.HistoricoRepositorio import HistoricoRepositorio

class Biblioteca:
    def __init__(self):
        self.__itens: list[ItemBiblioteca] = []
        self.__usuarios: list[Usuario] = []
        self.__historico_repositorio = HistoricoRepositorio()

        self.__limite_de_emprestimos = 20

    def __registrar_historico(self, usuario: Usuario, descricao: str) -> None:
        self.__historico_repositorio.registrar(Historico(usuario, descricao))

    def exibir_historico(self, filtro: map|None = None) -> None:
        historico_emprestimos = self.__historico_repositorio.listar_tudo()
        if filtro and filtro["tipo"] == "nome":
            historico_emprestimos = filter(lambda historico: historico.usuario.nome == filtro["valor"], historico_emprestimos)

        return "\n".join([historico.detalhes() for historico in historico_emprestimos])

    def adicionar_item(self, item: ItemBiblioteca) -> None:
        if item in self.__itens:
            raise Exception("Item já adicionado!")

        self.__itens.append(item)

    def adicionar_usuario(self, usuario: Usuario) -> None:
        if usuario in self.__usuarios:
            raise Exception("Usuário já adicionado")
    
        self.__usuarios.append(usuario)

    def emprestar_item(self, usuario: Usuario, item: ItemBiblioteca) -> str:
        try:
            if item not in self.__itens:
                raise Exception("Item não disponível na biblioteca.")
            
            if usuario not in self.__usuarios:
                raise Exception("Usuário não registrado")

            if len(self.__filtrar_por_emprestimo(True)) >= self.__limite_de_emprestimos:
                raise Exception("Limíte de empréstimos da biblioteca atingido")

            usuario.emprestar_item(item)

            self.__registrar_historico(usuario, f"{item.tipo} '{item.titulo}' emprestado.")
        except Exception as e:
            print(f"Erro ao emprestar item {item.titulo} para {usuario.nome}: {e}")
        
    def devolver_item(self, usuario: Usuario, item: ItemBiblioteca) -> str:
        try:
            if usuario not in self.__usuarios:
                raise Exception("Usuário não registrado")

            usuario.devolver_item(item)
            self.__itens.append(item)

            self.__registrar_historico(usuario, f"{item.tipo} '{item.titulo}' devolvido.")
        except Exception as e:
            print(f"Erro ao devolver item {item.titulo} para {usuario.nome}: {e}")

    def __encontrar(self, parametro: str, valor: str) -> list[ItemBiblioteca]:
        return list(filter(lambda item: (hasattr(item, parametro) and str(getattr(item, parametro)).strip().lower() or "") in str(valor).strip().lower(), self.__itens))

    def listar_itens_por_parametro(self, parametro: str, valor: str|int|float) -> str:
        return "\n".join([f"- {item.detalhes()}" for item in self.__encontrar(parametro, valor)])

    def __filtrar_por_emprestimo(self, emprestado: bool) -> list[ItemBiblioteca]:
        return list(filter(lambda l: (not emprestado and l.disponivel) or (emprestado and not l.disponivel), self.__itens))

    def __filtrar_por_expirado(self, expirado: bool) -> list[ItemBiblioteca]:
        return list(filter(lambda l: (not expirado and not l.expirado) or (expirado and l.expirado), self.__itens))

    def listar_itens_disponiveis(self) -> str:
        return "\n".join([f"- {item.detalhes()}" for item in self.__filtrar_por_emprestimo(True)])
    
    def listar_itens_emprestados(self) -> str:
        return "\n".join([f"- {item.detalhes()}" for item in self.__filtrar_por_emprestimo(False)])

    def listar_itens_expirados(self) -> str:
        return "\n".join([f"- {item.detalhes()}" for item in self.__filtrar_por_expirado(True)])
    
    def relatorio_geral(self) -> str:
        itens_em_emprestimo = len(self.__filtrar_por_emprestimo(True))
        itens_disponieis = len(self.__filtrar_por_emprestimo(False))
        return f"{"*"*8} RELATÓRIO GERAL DA BIBLIOTECA {"*"*8}\nTotal de itens: {len(self.__itens)}\nQuantidade de usuários: {len(self.__usuarios)}\nTotal de itens em empréstimo: {itens_em_emprestimo}\nTotal de itens disponíveis: {itens_disponieis}"
    
    def enviar_email(self, usuario: Usuario, descricao: str) -> bool:
        if not usuario.email:
            raise Exception(f"{usuario.nome} não possui e-mail.")
        
        print(f"{descricao} enviado para {usuario.email}")

    def notificar_atrasos(self) -> str:
        itens_expirados = self.__filtrar_por_expirado(True)

        for item in itens_expirados:
            try:
                emprestado_para = item.emprestado_para()
                if not emprestado_para:
                    continue

                self.enviar_email(emprestado_para, f"{item.tipo} {item.titulo} está atrasado!")
            except Exception as e:
                print(f"Erro ao notificar usuario: {e}")