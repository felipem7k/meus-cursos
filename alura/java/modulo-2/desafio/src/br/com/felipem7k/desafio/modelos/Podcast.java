package br.com.felipem7k.desafio.modelos;

public class Podcast extends Audio {
    private String host;

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    @Override
    public void estatisticas() {
        System.out.println("Host: %s".formatted(getHost()));
        super.estatisticas();
    }
}
