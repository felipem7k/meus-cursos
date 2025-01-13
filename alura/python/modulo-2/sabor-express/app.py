from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('praça', 'gourmet')
restaurante_praca.receber_avaliacao('Felipe', 10)
restaurante_praca.receber_avaliacao('Pedro', 6)
restaurante_praca.receber_avaliacao('Joao', 7)

restaurante_mexicano = Restaurante('Mexican Food', 'mexicana')
restaurante_japones = Restaurante('Japa', 'japonesa')

def main():
    Restaurante.listar_restaurantes()

if __name__ == "__main__":
    main()