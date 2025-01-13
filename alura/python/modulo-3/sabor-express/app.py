from modelos.restaurante import Restaurante
from modelos.cardapio.bebida import Bebida
from modelos.cardapio.prato import Prato

restaurante_praca = Restaurante('praça', 'gourmet')
restaurante_praca.receber_avaliacao('Felipe', 3)
restaurante_praca.receber_avaliacao('Pedro', 5)
restaurante_praca.receber_avaliacao('Joao', 3)

restaurante_mexicano = Restaurante('Mexican Food', 'mexicana')
restaurante_japones = Restaurante('Japa', 'japonesa')

bebida1 = Bebida("Coca-cola", 12.0, "2L")
prato1 = Prato("Pizza", 70.0, "Pizza saborosa.")

def main():
    print(bebida1)
    print(prato1)

if __name__ == "__main__":
    main()