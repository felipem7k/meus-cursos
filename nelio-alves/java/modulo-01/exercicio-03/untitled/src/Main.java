import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Quantos digitos quer somar?");

        int total = scanner.nextInt();
        int sumTotal = 0;

        for (int i = 0; i < total; i++) {
            int current = scanner.nextInt();

            sumTotal += current;
        }

        System.out.println(sumTotal);

        scanner.close();
    }
}