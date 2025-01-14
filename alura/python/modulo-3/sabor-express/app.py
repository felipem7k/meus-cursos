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
bebida1.aplicar_desconto()
prato1 = Prato("Pizza", 70.0, "Pizza saborosa.")
prato1.aplicar_desconto()

restaurante_praca.adicionar_item_ao_cardapio(bebida1)
restaurante_praca.adicionar_item_ao_cardapio(prato1)

def main():
    restaurante_praca.exibir_cardapio

if __name__ == "__main__":
    main()