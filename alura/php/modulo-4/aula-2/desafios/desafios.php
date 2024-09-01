<?php

class ContaBancaria {
    protected int $saldoEmCentavos;

    public function __construct(
        public readonly string $titular,
    )
    {
        $this->saldoEmCentavos = 0;
    }

    public function depositar(int $valorADepositar): void
    {
        if ($valorADepositar > 0) {
            $this->saldoEmCentavos += $valorADepositar;
            echo "Depositou " . $valorADepositar / 100 . PHP_EOL;
        }

    }

    public function sacar(int $valorASacar): void
    {
        if ($valorASacar > 0 && $valorASacar < $this->saldoEmCentavos) {
            $this->saldoEmCentavos -= $valorASacar;
            echo "Sacou " . $valorASacar / 100 . PHP_EOL;
        }
    }

    public function consultarSaldo(): float 
    {
        return $this->saldoEmCentavos / 100;
    }
}

class ContaCorrente extends ContaBancaria {
    private const float TARIFA_MENSAL = 500;
    private const float TARIFA_SAQUE = 0.005;

    public function __construct(
        string $titular,
    )
    {
        parent::__construct($titular);
    }

    public function cobrarTarifaMensal()
    {
        $this->saldoEmCentavos -= self::TARIFA_MENSAL;
    }

    #[Override]
    public function sacar(int $valorASacar): void
    {
        $saqueTotal = $valorASacar + ($valorASacar * self::TARIFA_SAQUE);

        if ($saqueTotal > 0 && $this->saldoEmCentavos >= $saqueTotal) {
            echo "Sacou " . $saqueTotal / 100 . PHP_EOL;
            $this->saldoEmCentavos -= $saqueTotal;
        }
    }
}

$conta = new ContaCorrente(
    "Felipe",
);

$conta->depositar(3550);
$conta->sacar(300);

$conta->cobrarTarifaMensal();

echo $conta->titular . PHP_EOL;

echo $conta->consultarSaldo() . PHP_EOL;