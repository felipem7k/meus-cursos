package br.com.felipem7k.desafio.modelos;

public class Musica extends Audio {
    private String artista;
    private String genero;

    public String getArtista() {
        return artista;
    }
    public void setArtista(String artista) {
        this.artista = artista;
    }
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }

    @Override
    public void estatisticas() {
        System.out.println("Artista: %s".formatted(getArtista()));
        System.out.println("Gênero: %s".formatted(getGenero()));
        super.estatisticas();
    }
}
