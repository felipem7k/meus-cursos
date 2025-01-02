package br.com.felipem7k.screenmatch.principal;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import br.com.felipem7k.screenmatch.modelos.ErroDeConversaoDeAnoException;
import br.com.felipem7k.screenmatch.modelos.Titulo;
import br.com.felipem7k.screenmatch.modelos.TituloOmdb;

public class PrincipalComBusca {
    public static void main(String[] args) throws IOException, InterruptedException {
        Scanner leitura = new Scanner(System.in);
        System.out.println("Digite um filme para busca: ");
        String nomeFilme = leitura.nextLine();

        String busca = "https://www.omdbapi.com/?t=" + nomeFilme.replace( " ", "+") + "&apikey=e1c35453";
        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(busca))
                .build();

            HttpResponse<String> response = client
                .send(request, HttpResponse.BodyHandlers.ofString());

            String json = response.body();

            leitura.close();

            Gson gson = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
                .create();
                TituloOmdb meTituloOmdb = gson.fromJson(json, TituloOmdb.class);
                System.out.println(meTituloOmdb);

                Titulo meTitulo = new Titulo(meTituloOmdb);
                System.out.println(meTitulo);
        } catch (NumberFormatException e) {
            System.out.println("Aconteceu um erro: ");
            System.out.println(e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("Algum argumento inválido na busca. Verifique o endereço.");
        } catch (ErroDeConversaoDeAnoException e) {
            System.out.println(e.getMessage());
        }

        System.out.println("Programa finalizado.");
    }
}
