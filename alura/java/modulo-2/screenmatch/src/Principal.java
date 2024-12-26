public class Principal {
    public static void main(String[] args) {
        Filme meuFilme = new Filme();
        meuFilme.nome = "O poderoso chefão";
        meuFilme.anoDeLancamento = 1990;
        meuFilme.duracaoEmMinutos = 200;
        meuFilme.incluidoNoPlano = true;

        meuFilme.exibeFichaTecnica();

        meuFilme.avalia(5);
        meuFilme.avalia(3);
        meuFilme.avalia(3);
        meuFilme.avalia(3);
        meuFilme.avalia(5);

        System.out.println(meuFilme.somaDasAvaliacoes);
        System.out.println(meuFilme.totalDeAvaliacoes);
        System.out.println(meuFilme.pegaMediaDasAvaliacoes());
    }
}
