import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int currentNum = 1;
        int currentSum = 0;

        while (currentNum != 0) {
            System.out.println("Digite um número para adicionar à soma, ou 0 para finalizar.");
            currentNum = scanner.nextInt();
            currentSum += currentNum;
        }

        System.out.println(currentSum);

        scanner.close();
    }
}