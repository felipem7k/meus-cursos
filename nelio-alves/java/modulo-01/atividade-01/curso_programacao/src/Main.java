import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        double x = 3.123124;
        int y = 32;

        System.out.printf("%.2f%n", x);
        System.out.println(y);

        System.out.println("Hello world!");

        System.out.println("RESULTADO = " + x + " metros");
        System.out.printf("RESULTADO = %.2f metros%n", x);

        String nome = "Maria";
        int idade = 40;
        double salario = 2000.0;

        System.out.printf("%s tem %d anos e ganha R$ %.2f%n", nome, idade, salario);

    }
}