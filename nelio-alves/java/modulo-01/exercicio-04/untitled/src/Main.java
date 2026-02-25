import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char keep = 'n';
        do {
            System.out.println("Digite a temperatura em Celsius: ");
            double temperature = scanner.nextDouble();

            System.out.printf("Equivalente em Fahrenheit: %.2f%n", ((temperature * 9) / 5) + 32);

            System.out.println("Deseja continuar? (s/n)");

            keep = scanner.next().charAt(0);
        } while (keep == 's');

        scanner.close();
    }
}