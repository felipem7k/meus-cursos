class Banda(string nome)
{
    private List<Album> albuns = [];
    public string Nome { get; set; } = nome;

    public void AdicionarAlbum(Album album)
    {
        albuns.Add(album);
    }

    public void ExibirDiscografia()
    {
        Console.WriteLine($"Discografia da banda {Nome}");
        foreach (Album album in albuns)
        {
            Console.WriteLine($"Album: {album.Nome} ({album.DuracaoTotal}s)");
            Console.WriteLine("Ficha técnica: ");
            album.ExibirMusicasDoAlbum();
        }
    }
}