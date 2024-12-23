public class Main {
    public static void main(String[] args) {
        System.out.println("Esse é o Screen Match");

        int anoDeLancamento = 2022;
        boolean incluidoNoPlano = true;
        double notaDoFilme = 8.1;

        // Media calculada pela soma de 3 notas.
        double media = (9.8 + 6.3 + 9.3) / 3;
        System.out.println(media);

        String sinopse = """
                Filme: Top Gun: Maverick
                Filme de aventura com galã dos anos 80
                Ano de lançamento
                """ + anoDeLancamento;
        System.out.println(sinopse);

        int classificacao = (int) (media / 2);

        System.out.println(classificacao);
    }
}