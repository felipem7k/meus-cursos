from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('praça', 'gourmet')
restaurante_praca.receber_avaliacao('Felipe', 3)
restaurante_praca.receber_avaliacao('Pedro', 5)
restaurante_praca.receber_avaliacao('Joao', 3)

restaurante_mexicano = Restaurante('Mexican Food', 'mexicana')
restaurante_japones = Restaurante('Japa', 'japonesa')

def main():
    Restaurante.listar_restaurantes()

if __name__ == "__main__":
    main()