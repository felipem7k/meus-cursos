Musica musica1 = new Musica();
musica1.Nome = "Carta Aberta";
musica1.Artista = "Henrique e Juliano";
musica1.Duracao = 227;
musica1.Disponivel = false;

Musica musica2 = new()
{
    Nome = "O casamento da Doralice",
    Artista = "Grupo Tradição",
    Duracao = 211,
    Disponivel = true
};

musica1.ExibirFichaTecnica();
musica2.ExibirFichaTecnica();
