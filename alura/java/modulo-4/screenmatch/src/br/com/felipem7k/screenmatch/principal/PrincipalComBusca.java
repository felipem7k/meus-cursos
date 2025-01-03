package br.com.felipem7k.screenmatch.principal;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
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
        List<Titulo> titulos = new ArrayList<>();

        Gson gson = new GsonBuilder()
        .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
        .setPrettyPrinting()
        .create();

        String busca = "";
        while (!busca.equalsIgnoreCase("sair")) {
            System.out.println("Digite um filme para busca: ");
            busca = leitura.nextLine();
    
            if (busca.equalsIgnoreCase("sair")) {
                break;
            }

            String url = "https://www.omdbapi.com/?t=" + busca.replace( " ", "+") + "&apikey=e1c35453";
            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .build();
    
                HttpResponse<String> response = client
                    .send(request, HttpResponse.BodyHandlers.ofString());
    
                String json = response.body();
        
                TituloOmdb meTituloOmdb = gson.fromJson(json, TituloOmdb.class);
                System.out.println(meTituloOmdb);

                Titulo meTitulo = new Titulo(meTituloOmdb);
                System.out.println(meTitulo);
    
                titulos.add(meTitulo);

            } catch (NumberFormatException e) {
                System.out.println("Aconteceu um erro: ");
                System.out.println(e.getMessage());
            } catch (IllegalArgumentException e) {
                System.out.println("Algum argumento inválido na busca. Verifique o endereço.");
            } catch (ErroDeConversaoDeAnoException e) {
                System.out.println(e.getMessage());
            }
        }
        System.out.println(titulos);
        System.out.println("Programa finalizado.");

        FileWriter escrita = new FileWriter("./alura/java/modulo-4/screenmatch/src/br/com/felipem7k/screenmatch/filmes.json");
        escrita.write(gson.toJson(titulos));
        escrita.close();
        
        leitura.close();
    }
}
