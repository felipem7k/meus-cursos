using ScreenSound.Menus;
using ScreenSound.Modelos;

Banda banda1 = new("Henrique e Juliano");
Banda banda2 = new("Jorge e Matheus");

banda1.AdicionarNota(new Avaliacao(10));
banda1.AdicionarNota(new Avaliacao(9));
banda1.AdicionarNota(new Avaliacao(10));

Dictionary<string, Banda> bandasRegistradas = new()
{
    { banda1.Nome, banda1 },
    { banda2.Nome, banda2 }
};

Dictionary<int, Menu> opcoes = new()
{
    {1, new MenuRegistrarBanda()},
    {2, new MenuRegistrarAlbum()},
    {3, new MenuMostrarBandasRegistradas()},
    {4, new MenuAvaliarBanda()},
    {5, new MenuExibirDetalhes()},
    {-1, new MenuSair()}
};

void ExibirLogo()
{
    Console.WriteLine(@"

░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗  ░██████╗░█████╗░██╗░░░██╗███╗░░██╗██████╗░
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║  ██╔════╝██╔══██╗██║░░░██║████╗░██║██╔══██╗
╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║  ╚█████╗░██║░░██║██║░░░██║██╔██╗██║██║░░██║
░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║  ░╚═══██╗██║░░██║██║░░░██║██║╚████║██║░░██║
██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║  ██████╔╝╚█████╔╝╚██████╔╝██║░╚███║██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░░╚═════╝░╚═╝░░╚══╝╚═════╝░
");
    Console.WriteLine("Boas vindas ao Screen Sound 2.0!");
}

void ExibirOpcoesDoMenu()
{
    ExibirLogo();
    Console.WriteLine("\nDigite 1 para registrar uma banda");
    Console.WriteLine("Digite 2 para registrar o álbum de uma banda");
    Console.WriteLine("Digite 3 para mostrar todas as bandas");
    Console.WriteLine("Digite 4 para avaliar uma banda");
    Console.WriteLine("Digite 5 para exibir os detalhes de uma banda");
    Console.WriteLine("Digite -1 para sair");

    Console.Write("\nDigite a sua opção: ");
    string opcaoEscolhida = Console.ReadLine()!;
    int opcaoEscolhidaNumerica = int.Parse(opcaoEscolhida);

    if (opcoes.ContainsKey(opcaoEscolhidaNumerica))
    {
        Menu menu = opcoes[opcaoEscolhidaNumerica];
        menu.Executar(bandasRegistradas);
        if (opcaoEscolhidaNumerica > 0)
        {
            ExibirOpcoesDoMenu();
        }
    } else
    {
        Console.WriteLine("Opção inválida");
    }
}

ExibirOpcoesDoMenu();