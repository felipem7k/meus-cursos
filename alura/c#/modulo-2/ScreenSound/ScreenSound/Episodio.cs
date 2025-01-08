class Episodio(string titulo, int ordem)
{
    public string Titulo { get; } = titulo;
    public int Ordem { get; } = ordem;
    public int Duracao { get; set; }
    public string Resumo => $"#{Ordem} | {Titulo} - {Duracao} minutos";
}