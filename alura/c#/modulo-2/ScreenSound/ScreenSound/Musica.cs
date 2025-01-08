class Musica(Banda artista, string nome)
{
    public string Nome { get; set; } = nome;
    public Banda Artista { get; } = artista;
    public int Duracao { get; set; }
    public bool Disponivel { get; set; }
    public string DescricaoResumida => $"A música {this.Nome} pertence ao artista {this.Artista}";

    public void ExibirFichaTecnica()
    {
        Console.WriteLine($"Nome: {this.Nome}");
        Console.WriteLine($"Artista: {this.Artista.Nome}");
        Console.WriteLine($"Duração: {this.Duracao}");
        Console.WriteLine(this.DescricaoResumida);
        if (Disponivel)
        {
            Console.WriteLine("Disponível no plano");
        } else
        {
            Console.WriteLine("Adquira o plano Plus");
        }
    }
}