using ScreenSound.Modelos;

namespace ScreenSound.Filtros;

internal class LinqFilter
{
    public static void FiltrarTodosOsGenerosMusicais(List<Musica> musicas)
    {
        var todosOsGenerosMusicais = musicas.Select(generos => generos.Genero).Distinct().ToList();
        Console.WriteLine("\nLista de gêneros das músicas: \n");
        foreach (var genero in todosOsGenerosMusicais)
        {
            Console.WriteLine(genero);
        }
    }

    public static void FiltrarArtistasPorGeneroMusical(List<Musica> musicas, string genero)
    {
        var artistasPorGeneroMusical = musicas.Where(musica => musica.Genero!.Contains(genero)).Select(musica => musica.Artista).Distinct().ToList();
        Console.WriteLine($"\nLista de artistas por gênero musical ({genero}): \n");
        foreach (var artista in artistasPorGeneroMusical)
        {
            Console.WriteLine(artista);
        }
    }

    public static void FiltrarMusicasPorArtista(List<Musica> musicas, string nomeDoArtista)
    {
        var musicasDoArtista = musicas.Where(musica => musica.Artista!.Equals(nomeDoArtista)).Select(musica => musica.Nome).Distinct().Order().ToList();
        Console.WriteLine($"\nMúsicas do artista '{nomeDoArtista}': \n");
        foreach (var musica in musicasDoArtista)
        {
            Console.WriteLine(musica);
        }
    }
}
