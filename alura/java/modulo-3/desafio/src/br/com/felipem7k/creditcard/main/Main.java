import java.util.Scanner;

import br.com.felipem7k.creditcard.models.Card;
import br.com.felipem7k.creditcard.models.Purchase;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o limíte do cartão:");
        int limit = scan.nextInt();
        scan.nextLine();

        Card card = new Card(limit);

        int option = 1;

        while (option != 0) {
            System.out.println("Digite a descrição da compra:");
            String description = scan.nextLine();

            System.out.println("Digite o valor da compra");
            double price = scan.nextDouble();

            Purchase purchase = new Purchase(description, price);

            if (!card.tryPayment(purchase)) {
                System.out.println("Limite insuficiente.");
                option = 0;
                break;
            } else {
                System.out.println("Compra realizada!");
            }

            System.out.println("Digite 0 para sair ou 1 para continuar");
            option = scan.nextInt();
            scan.nextLine();
        }

        System.out.println("******************");
        System.out.println("Compras realizadas: \n");
        for (Purchase purchase : card.getHistory()) {
            System.out.println(purchase.getDescription() + " - " + purchase.getPrice());
        }
        System.out.println("******************");
        System.out.println("Limite disponível: R$ " + (double) card.getLimit());

        scan.close();
    }
}
