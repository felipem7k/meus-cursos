// Screen Sound
using System.Collections.ObjectModel;

string mensagemDeBoasVindas = "Boas vindas ao Screen Sound\n";
//List<string> listaDeBandas = new List<string> {"Henrique e Juliano", "Jorge e Matheus"};
Dictionary<string, List<int>> bandasRegistradas = new Dictionary<string, List<int>>();
bandasRegistradas.Add("Henrique e Juliano", new List<int> {10, 9, 10});
bandasRegistradas.Add("Jorge e Matheus", new List<int>());

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
    Console.WriteLine(mensagemDeBoasVindas);
}

void ExibirOpcoesDoMenu()
{
    ExibirLogo();
    Console.WriteLine("Digite 1 para registrar uma banda");
    Console.WriteLine("Digite 2 para mostrar todas as bandas");
    Console.WriteLine("Digite 3 para avaliar uma banda");
    Console.WriteLine("Digite 4 para exibir a média de uma banda");
    Console.WriteLine("Digite -1 para sair");

    Console.Write("\nDigite a sua opção: ");
    int opcaoEscolhida = int.Parse(Console.ReadLine()!);
    switch (opcaoEscolhida)
    {
        case 1:
            RegistrarBanda();
            break;
        case 2:
            MostrarBandasRegistradas();
            break;
        case 3:
            AvaliarBanda();
            break;
        case 4:
            ExibirMedia();
            break;
        case -1:
            Console.WriteLine("Programa encerrado, até a próxima!");
            break;
        default:
            Console.WriteLine("Opção inválida!");
            break;
    }
}

void ExibirSubtitulo(string texto)
{
    Console.Clear();

    string asteriscos = "".PadLeft(texto.Length, '*');
    Console.WriteLine(asteriscos);
    Console.WriteLine(texto);
    Console.WriteLine(asteriscos + "\n");
}

void PressioneParaVoltar()
{
    Console.WriteLine("\nDigite uma tecla para voltar ao menu principal");
    Console.ReadKey();
    Console.Clear();
    ExibirOpcoesDoMenu();
}

void RegistrarBanda()
{
    ExibirSubtitulo("Registro de bandas");

    Console.Write("Digite o nome da banda que deseja registrar: ");
    string nomeDaBanda = Console.ReadLine()!;

    bandasRegistradas.Add(nomeDaBanda, new List<int>());

    Console.WriteLine($"A banda {nomeDaBanda} foi registrada com sucesso!");

    PressioneParaVoltar();
}

void AvaliarBanda()
{
    ExibirSubtitulo("Avaliar banda");

    Console.Write("Digite o nome da banda que deseja avaliar: ");
    string nomeBanda = Console.ReadLine()!;
    if (bandasRegistradas.ContainsKey(nomeBanda))
    {
        Console.Write($"Digite a nota desejada para {nomeBanda}:");
        int nota = int.Parse(Console.ReadLine()!);
        bandasRegistradas[nomeBanda].Add(nota);
        Console.WriteLine($"Banda {nomeBanda} avaliada com sucesso!");
    } else
    {
        Console.WriteLine($"Banda {nomeBanda} não encontrada!");
    }

    PressioneParaVoltar();
}

void MostrarBandasRegistradas()
{
    ExibirSubtitulo("Lista de bandas");

    //for (int i = 0; i < listaDeBandas.Count; i++)
    //{
    //    Console.WriteLine($"Banda: {listaDeBandas[i]}");
    //}
    foreach (string nomeDaBanda in bandasRegistradas.Keys)
    {
        Console.WriteLine($"Banda: {nomeDaBanda}");
    }

    PressioneParaVoltar();
}

void ExibirMedia()
{
    ExibirSubtitulo("Média da banda");

    Console.Write("Digite o nome da banda desejada para calcular a média da nota: ");
    string nomeBanda = Console.ReadLine()!;

    if (bandasRegistradas.ContainsKey(nomeBanda))
    {
        List<int> notas = bandasRegistradas[nomeBanda];

        Console.WriteLine($"A média das notas da banda {nomeBanda} é {notas.Average()}");
    } else
    {
        Console.WriteLine($"Banda {nomeBanda} não encontrada!");
    }

    PressioneParaVoltar();
}

ExibirOpcoesDoMenu();

