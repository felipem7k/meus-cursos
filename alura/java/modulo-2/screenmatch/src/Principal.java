import br.com.felipem7k.screenmatch.modelos.Filme;

public class Principal {
    public static void main(String[] args) {
        Filme meuFilme = new Filme();
        meuFilme.setNome("O poderoso chefão");
        meuFilme.setAnoDeLancamento(1990);;
        meuFilme.setDuracaoEmMinutos(200);;

        meuFilme.exibeFichaTecnica();

        meuFilme.avalia(5);
        meuFilme.avalia(3);
        meuFilme.avalia(3);
        meuFilme.avalia(3);
        meuFilme.avalia(5);

        System.out.println(meuFilme.pegaMediaDasAvaliacoes());
        System.out.println(meuFilme.getTotalDeAvaliacoes());
    }
}
