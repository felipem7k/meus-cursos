class Podcast(string host, string nome)
{
    private List<Episodio> episodios = [];
    public string Host { get; } = host;
    public string Nome { get; } = nome;
    public int TotalEpisodios => episodios.Count;

    public void AdicionarEpisodio(Episodio episodio)
    {
        episodios.Add(episodio);
    }

    public void ExibirDetalhes()
    {
        Console.WriteLine($"{Nome} - {Host}\n");
        Console.WriteLine("Lista de episódios: \n");
        foreach (var episodio in episodios)
        {
            Console.WriteLine(episodio.Resumo);
        }
        Console.WriteLine($"\nTotal de episódios: {TotalEpisodios}");
    }
}
