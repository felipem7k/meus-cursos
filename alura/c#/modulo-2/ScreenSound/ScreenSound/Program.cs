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