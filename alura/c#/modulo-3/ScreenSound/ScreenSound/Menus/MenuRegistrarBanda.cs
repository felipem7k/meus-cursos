using dotenv.net;
using OpenAI.Chat;
using ScreenSound.Modelos;

namespace ScreenSound.Menus;

internal class MenuRegistrarBanda : Menu
{
    public override void Executar(Dictionary<string, Banda> bandasRegistradas)
    {
        base.Executar(bandasRegistradas);
        ExibirTituloDaOpcao("Registro das bandas");
        Console.Write("Digite o nome da banda que deseja registrar: ");
        string nomeDaBanda = Console.ReadLine()!;
        Banda banda = new(nomeDaBanda);

        DotEnv.Load();
        var envVars = DotEnv.Read();

        var client = new ChatClient(model: "gpt-4o-mini", apiKey: envVars["APIKEY"]);
        ChatCompletion completion = client.CompleteChatAsync($"Resuma a banda {nomeDaBanda} em 1 parágrafo. Adote um estilo informal.").GetAwaiter().GetResult();
        banda.Resumo = completion.Content[0].Text;

        bandasRegistradas.Add(nomeDaBanda, banda);
        Console.WriteLine($"A banda {nomeDaBanda} foi registrada com sucesso!");
        Console.WriteLine("Digite uma tecla para voltar ao menu principal");
        Console.ReadKey();
        Console.Clear();
    }
}
