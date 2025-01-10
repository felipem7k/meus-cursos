using ScreenSound.Modelos;

namespace ScreenSound.Filtros;

internal class LinqOrder
{
    public static void ExibirListaDeArtistasOrdenados(List<Musica> musicas)
    {
        Console.WriteLine("\nLista de artistas ordenados: \n");
        var artistasOrdenados = musicas.OrderBy(musica => musica.Artista).Select(musica => musica.Artista).Distinct().ToList();
        foreach (var artista in artistasOrdenados)
        {
            Console.WriteLine(artista);
        }
    }
}
