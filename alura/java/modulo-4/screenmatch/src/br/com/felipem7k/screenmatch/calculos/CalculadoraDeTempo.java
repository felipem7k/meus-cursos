package br.com.felipem7k.screenmatch.calculos;

import br.com.felipem7k.screenmatch.modelos.Titulo;

public class CalculadoraDeTempo {
    private int tempoTotal;

    public int getTempoTotal() {
        return tempoTotal;
    }
    
    // public void inclui(Filme filme) {
    //     tempoTotal += filme.getDuracaoEmMinutos();
    // }

    // public void inclui(Serie serie) {
    //     tempoTotal += serie.getDuracaoEmMinutos();
    // }

    public void inclui(Titulo titulo) {
        tempoTotal += titulo.getDuracaoEmMinutos();
    }
}
