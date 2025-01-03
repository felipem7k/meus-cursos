package br.com.felipem7k.desafio.main;

import java.io.FileWriter;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("""
                *******************************
                        ADRESS FINDER
                *******************************
                """);

        System.out.println("Digite seu CEP (Ex.: 12345678): ");
        String input = scanner.nextLine();
        String cep = input.replace("-", "");

        String adressUrl = "https://viacep.com.br/ws/"+ cep +"/json";
        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(adressUrl))
                .build();

            HttpResponse<String> response = client
                .send(request, HttpResponse.BodyHandlers.ofString());

            String myAdress = response.body();
            System.out.println("Informações sobre seu CEP: ");
            System.out.println(myAdress);
            System.out.println("Endereço armazenado na pasta 'cep.json'");

            FileWriter writer = new FileWriter("./alura/java/modulo-4/desafio/src/br/com/felipem7k/desafio/cep.json");
            writer.write(myAdress);
            writer.close();
        } catch (Exception e) {
            System.out.println("Ops! Endereço não encontrado. Siga o padrão '12345678'.");
        }

        scanner.close();
    }
}
