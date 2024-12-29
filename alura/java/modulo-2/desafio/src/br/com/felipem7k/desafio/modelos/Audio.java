package br.com.felipem7k.desafio.modelos;

public class Audio {
    private String titulo;
    private int duracao;
    private int totalDeReproducoes;
    private int curtidas;
    private double classificacao;

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public int getDuracao() {
        return duracao;
    }
    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }
    public int getTotalDeReproducoes() {
        return totalDeReproducoes;
    }
    public int getCurtidas() {
        return curtidas;
    }
    public double getClassificacao() {
        return classificacao;
    }

    public void reproduzir() {
        System.out.println("Reproduzindo: '%s'!".formatted(getTitulo()));
        totalDeReproducoes++;
    }

    public void curtir() {
        curtidas++;
    }

    public void estatisticas() {
        System.out.println("Título: %s".formatted(getTitulo()));
        System.out.println("Total de curtidas: %d".formatted(getCurtidas()));
        System.out.println("Total de reproduções: %d".formatted(getTotalDeReproducoes()));
        System.out.println("Duração: %d minutos".formatted(getDuracao()));
    }
}
