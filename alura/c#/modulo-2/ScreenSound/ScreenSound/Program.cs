Album albumHEJ = new();
albumHEJ.Nome = "Manifesto Musical 2";

Musica musica1 = new()
{
    Nome = "Última Saudade",
    Duracao = 230
};
Musica musica2 = new()
{
    Nome = "Seja Ex",
    Duracao = 312
};

albumHEJ.AdicionarMusica(musica1);
albumHEJ.AdicionarMusica(musica2);

albumHEJ.ExibirMusicasDoAlbum();