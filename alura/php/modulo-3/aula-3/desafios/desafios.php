<?php
enum Tipos {
    case Corrente;
    case Investimento;
    case Poupanca;
    case Universitaria;

    public function possuiTaxa(): bool
    {
        return match($this) {
            Tipos::Corrente, Tipos::Investimento => true,
            Tipos::Poupanca, Tipos::Universitaria => false,
        };
    }
}

class Contas {
    private int $saldoEmCentavos;

    public function __construct(
        public readonly string $titular,
        public readonly Tipos $tipo,
    )
    {
        $this->saldoEmCentavos = 0;
    }

    public function depositar(int $valorADepositar): void
    {
        if ($valorADepositar > 0) {
            $this->saldoEmCentavos += $valorADepositar;
        }
    }

    public function sacar(int $valorASacar): void
    {
        if ($valorASacar > 0 && $valorASacar < $this->saldoEmCentavos) {
            $this->saldoEmCentavos -= $valorASacar;
        }
    }
}

$conta = new Contas(
    "Felipe",
    Tipos::Corrente
);

$conta->depositar(300);

echo $conta->titular;