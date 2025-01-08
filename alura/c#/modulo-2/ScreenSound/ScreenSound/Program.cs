Console.WriteLine("----------------- Músicas\n");

Banda banda = new("Henrique e Juliano");
Album albumHEJ = new("Manifesto Musical 2");

Musica musica1 = new(banda, "Última Saudade")
{
    Duracao = 230,
    Disponivel = true
};
Musica musica2 = new(banda, "Seja Ex")
{
    Duracao = 312
};

albumHEJ.AdicionarMusica(musica1);
albumHEJ.AdicionarMusica(musica2);

banda.AdicionarAlbum(albumHEJ);
banda.ExibirDiscografia();

Console.WriteLine("\n\n----------------- Podcasts\n");

Podcast podcast = new("Rogério Vilela", "Inteligência Ltda.");
Episodio eposidio1 = new("Física Quântica: Sergio Sacani e César Lenzi", 1395)
{
    Duracao = 180
};
Episodio eposidio2 = new("A esquerda morreu: Vladimir Safatle", 1410)
{
    Duracao = 90
};

podcast.AdicionarEpisodio(eposidio1);
podcast.AdicionarEpisodio(eposidio2);

podcast.ExibirDetalhes();
