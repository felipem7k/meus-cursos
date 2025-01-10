using System.Text.Json;
using ScreenSound.Filtros;
using ScreenSound.Modelos;

using (HttpClient client = new())
{
    try
    {
        string resposta = await client.GetStringAsync("https://guilhermeonrails.github.io/api-csharp-songs/songs.json");
        var musicas = JsonSerializer.Deserialize<List<Musica>>(resposta)!;
        LinqFilter.FiltrarTodosOsGenerosMusicais(musicas);
        LinqOrder.ExibirListaDeArtistasOrdenados(musicas);
        LinqFilter.FiltrarArtistasPorGeneroMusical(musicas, "blues");
        LinqFilter.FiltrarMusicasPorArtista(musicas, "XXXTENTACION");

        var minhasMusicasPreferidas = new MusicasPreferidas("Felipe");
        minhasMusicasPreferidas.AdicionarMusica(musicas[2]);
        minhasMusicasPreferidas.AdicionarMusica(musicas[654]);
        minhasMusicasPreferidas.AdicionarMusica(musicas[430]);
        minhasMusicasPreferidas.AdicionarMusica(musicas[1500]);
        minhasMusicasPreferidas.AdicionarMusica(musicas[1300]);

        var outrasMusicasPreferidas = new MusicasPreferidas("Lenon");
        outrasMusicasPreferidas.AdicionarMusica(musicas[41]);
        outrasMusicasPreferidas.AdicionarMusica(musicas[414]);
        outrasMusicasPreferidas.AdicionarMusica(musicas[412]);
        outrasMusicasPreferidas.AdicionarMusica(musicas[411]);
        outrasMusicasPreferidas.AdicionarMusica(musicas[410]);

        minhasMusicasPreferidas.ExibirMusicas();
        minhasMusicasPreferidas.GerarArquivoJson();

        musicas[2].ExibirDetalhesDaMusica();

        LinqFilter.FiltrarMusicaPorTonalidade(musicas, 1);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Temos um problema: {ex.Message}");
    }
}