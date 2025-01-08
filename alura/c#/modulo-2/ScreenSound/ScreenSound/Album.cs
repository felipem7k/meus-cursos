class Album
{
    private List<Musica> musicas = [];
    public string Nome { get; set; }
    public int DuracaoTotal => musicas.Sum(musica => musica.Duracao);

    public void AdicionarMusica(Musica musica)
    {
        musicas.Add(musica);
    }

    public void ExibirMusicasDoAlbum()
    {
        Console.WriteLine($"Lista de músicas do album {Nome}: \n");
        foreach (var musica in musicas)
        {
            musica.ExibirFichaTecnica();
            Console.WriteLine("----------------");
        }
        Console.WriteLine($"\nPara ouvir este album inteiro você precisa de {DuracaoTotal} segundos.");
    }
}