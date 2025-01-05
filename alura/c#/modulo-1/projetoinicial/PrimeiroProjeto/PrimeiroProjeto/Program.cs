// Screen Sound
string mensagemDeBoasVindas = "Boas vindas ao Screen Sound\n";
List<string> listaDeBandas = new List<string> {"Henrique e Juliano", "Jorge e Matheus"};

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
            Console.WriteLine("Você digitou a opção " + opcaoEscolhida);
            break;
        case 4:
            Console.WriteLine($"Você digitou a opção {opcaoEscolhida}");
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


    Console.WriteLine("*********************");
    Console.WriteLine(texto);
    Console.WriteLine("*********************\n");
}

void RegistrarBanda()
{
    ExibirSubtitulo("Registro de bandas");

    Console.Write("Digite o nome da banda que deseja registrar: ");
    string nomeDaBanda = Console.ReadLine()!;
    listaDeBandas.Add(nomeDaBanda);
    Console.WriteLine($"A banda '{nomeDaBanda}' foi registrada com sucesso!");

    Thread.Sleep(2000);
    Console.Clear();

    ExibirOpcoesDoMenu();
}

void MostrarBandasRegistradas()
{
    ExibirSubtitulo("Lista de bandas");

    //for (int i = 0; i < listaDeBandas.Count; i++)
    //{
    //    Console.WriteLine($"Banda: {listaDeBandas[i]}");
    //}
    foreach (string nomeDaBanda in listaDeBandas)
    {
        Console.WriteLine($"Banda: {nomeDaBanda}");
    }

    Console.WriteLine("\nDigite uma tecla para voltar ao menu principal");
    Console.ReadKey();
    Console.Clear();
    ExibirOpcoesDoMenu();
}

ExibirOpcoesDoMenu();

