import br.com.felipem7k.desafio.modelos.Musica;
import br.com.felipem7k.desafio.modelos.Podcast;

public class Main {
    public static void main(String[] args) {
        Musica musica = new Musica();
        musica.setTitulo("Era você");
        musica.setArtista("Jads e Jadson");
        musica.setGenero("Sertanejo");
        musica.reproduzir();
        musica.setDuracao(3);

        musica.reproduzir();

        musica.curtir();
        musica.curtir();
        musica.curtir();
        musica.curtir();
        musica.curtir();

        musica.estatisticas();

        System.out.println("*************");

        Podcast podcast = new Podcast();
        podcast.setTitulo("1347 - Sérgio Sacani");
        podcast.setDuracao(40);
        podcast.setHost("Inteligência Ltda.");

        podcast.curtir();
        podcast.curtir();
        podcast.curtir();
        podcast.curtir();
        podcast.curtir();
        podcast.curtir();

        podcast.estatisticas();
    }
}
