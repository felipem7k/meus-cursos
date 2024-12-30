import java.util.ArrayList;

import br.com.felipem7k.screenmatch.calculos.CalculadoraDeTempo;
import br.com.felipem7k.screenmatch.calculos.FiltroRecomendacao;
import br.com.felipem7k.screenmatch.modelos.Episodio;
import br.com.felipem7k.screenmatch.modelos.Filme;
import br.com.felipem7k.screenmatch.modelos.Serie;

public class Principal {
    public static void main(String[] args) {
        Filme meuFilme = new Filme("O poderoso chefão", 1990);
        meuFilme.setDuracaoEmMinutos(200);
        Filme outroFilme = new Filme("Tarzan", 2000);
        outroFilme.setDuracaoEmMinutos(60);

        meuFilme.exibeFichaTecnica();

        meuFilme.avalia(5);
        meuFilme.avalia(3);
        meuFilme.avalia(5);
        meuFilme.avalia(5);
        meuFilme.avalia(5);

        System.out.println(meuFilme.pegaMediaDasAvaliacoes());
        System.out.println(meuFilme.getTotalDeAvaliacoes());

        Serie serie = new Serie("Lost", 2010);

        serie.exibeFichaTecnica();

        serie.setTemporadas(3);
        serie.setEpisodiosPorTemporada(20);
        serie.setMinutosPorEpisodio(40);
        System.out.println("Duração para maratonar a série: " + serie.getDuracaoEmMinutos());

        CalculadoraDeTempo calculadora = new CalculadoraDeTempo();
        calculadora.inclui(meuFilme);
        calculadora.inclui(outroFilme);
        calculadora.inclui(serie);
        System.out.println(calculadora.getTempoTotal());

        FiltroRecomendacao filtro = new FiltroRecomendacao();
        filtro.filtra(meuFilme);

        Episodio episodio = new Episodio();
        episodio.setNumero(1);
        episodio.setSerie(serie);
        episodio.setTotalVisualizacoes(300);

        filtro.filtra(episodio);

        ArrayList<Filme> listaDeFilmes = new ArrayList<>();
        listaDeFilmes.add(meuFilme);
        listaDeFilmes.add(outroFilme);
        System.out.println("Tamanho da lista de filmes: "+ listaDeFilmes.size());
        System.out.println("Primeiro filme: "+ listaDeFilmes.get(0).getNome());
        System.out.println(listaDeFilmes);
    }
}
