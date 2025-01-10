using System.Text.Json;

namespace ScreenSound.Modelos;

internal class MusicasPreferidas
{
    public string? Nome { get; set; }
    public List<Musica> Musicas { get; set; }

    public MusicasPreferidas(string? nome)
    {
        Nome = nome;
        Musicas = [];
    }

    public void AdicionarMusica(Musica musica)
    {
        Musicas.Add(musica);
    }

    public void ExibirMusicas()
    {
        Console.WriteLine($"Músicas favoritas de '{Nome}'");
        foreach (var musica in Musicas)
        {
            Console.WriteLine($".{musica.Nome} - {musica.Artista}");
        }
    }

    public void GerarArquivoJson()
    {
        string json = JsonSerializer.Serialize(new
        {
            nome = Nome,
            musicas = Musicas
        });
        string nomeDoArquivo = $"musicas-favoritas-{Nome}.json";
        
        File.WriteAllText(nomeDoArquivo, json);
        Console.WriteLine("Arquivo json criado com sucesso!");
    }
}
