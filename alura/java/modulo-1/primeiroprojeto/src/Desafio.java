import java.util.Scanner;

public class Desafio {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in); 

        String clienteNome = "Felipe Machado";
        String tipoDeConta = "Corrente";
        double saldo = 2500;

        String textoInicial = """
                ************************************
                
                Dados iniciais do cliente:

                Nome:          %s
                Tipo conta:    %s
                Saldo inicial: R$ %.2f

                ************************************
                """;
        System.out.println(textoInicial.formatted(clienteNome, tipoDeConta, saldo));

        int opcao = 0;
        while (opcao != 4) {
            System.out.println("""
                    OperaçÕes

                    1 - Consultar saldos
                    2 - Receber valor
                    3 - Transferir valor
                    4 - Sair

                    Digite a opção desejada:
                    """);

            opcao = leitura.nextInt();

            if (opcao == 1) {
                System.out.println("Seu saldo atual é de R$ %.2f.".formatted(saldo));
            } else if (opcao == 2) {
                System.out.println("Informe o valor a receber");

                double valor = leitura.nextDouble();
                if (valor <= 0) {
                    System.out.println("O valor precisa ser maior que 0!");
                } else {
                    System.out.println("Saldo antigo: R$ %.2f".formatted(saldo));
                    System.out.println("------------------------");
                    saldo += valor;
                    System.out.println("Saldo atualizado: R$ %.2f".formatted(saldo));
                }
            } else if (opcao == 3) {
                System.out.println("Informe o valor a transferir");

                double valor = leitura.nextDouble();
                if (valor <= 0) {
                    System.out.println("O valor precisa ser maior que 0!");
                } else {
                    if (valor > saldo) {
                        System.out.println("Saldo insuficiente.");
                    } else {
                        System.out.println("Saldo antigo: R$ %.2f".formatted(saldo));
                        System.out.println("------------------------");
                        saldo -= valor;
                        System.out.println("Saldo atualizado: R$ %.2f".formatted(saldo));
                    }
                }
            } else if (opcao == 4) {
                System.out.println("Operação finalizada.");
            } else {
                System.out.println("Opção inválida!");
            }
        }

        leitura.close();
    }
}
