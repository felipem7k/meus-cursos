package br.com.felipem7k.screenmatch.principal;

import java.util.ArrayList;

import br.com.felipem7k.screenmatch.modelos.Filme;
import br.com.felipem7k.screenmatch.modelos.Serie;
import br.com.felipem7k.screenmatch.modelos.Titulo;

public class PrincipalComListas {
    public static void main(String[] args) {
        Filme meuFilme = new Filme("O poderoso chefão", 1990);
        meuFilme.avalia(9);
        Filme outroFilme = new Filme("Tarzan", 2000);
        outroFilme.avalia(3);
        Serie serie = new Serie("Lost", 2010);
        serie.avalia(10);

        ArrayList<Titulo> lista = new ArrayList<>();
        lista.add(meuFilme);
        lista.add(outroFilme);
        lista.add(serie);

        for (Titulo titulo : lista) {
            System.out.println(titulo.getNome());
            if (titulo instanceof Filme filme) {
                System.out.println("Classificação: " + filme.getClassificacao());
            }
        }
    }
}
