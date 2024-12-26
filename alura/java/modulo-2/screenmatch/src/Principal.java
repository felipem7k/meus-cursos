import br.com.felipem7k.screenmatch.calculos.CalculadoraDeTempo;
import br.com.felipem7k.screenmatch.modelos.Filme;
import br.com.felipem7k.screenmatch.modelos.Serie;

public class Principal {
    public static void main(String[] args) {
        Filme meuFilme = new Filme();
        meuFilme.setNome("O poderoso chefão");
        meuFilme.setAnoDeLancamento(1990);
        meuFilme.setDuracaoEmMinutos(200);
        Filme outroFilme = new Filme();
        outroFilme.setNome("Tarzan");
        outroFilme.setAnoDeLancamento(2000);
        outroFilme.setDuracaoEmMinutos(60);

        meuFilme.exibeFichaTecnica();

        meuFilme.avalia(5);
        meuFilme.avalia(3);
        meuFilme.avalia(3);
        meuFilme.avalia(3);
        meuFilme.avalia(5);

        System.out.println(meuFilme.pegaMediaDasAvaliacoes());
        System.out.println(meuFilme.getTotalDeAvaliacoes());

        Serie serie = new Serie();

        serie.setNome("Lost");
        serie.setAnoDeLancamento(2010);

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
    }
}
