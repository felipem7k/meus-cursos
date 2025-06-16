<?php

namespace Alura\Leilao\Model;

class Leilao
{
    /** @var Lance[] */
    private $lances;
    /** @var string */
    private $descricao;

    public function __construct(string $descricao)
    {
        $this->descricao = $descricao;
        $this->lances = [];
    }

    public function recebeLance(Lance $lance)
    {
        if ($this->ehDoUltimoUsuario($lance->getUsuario())) {
            return;
        }

        $totalLancesDoUsuario = $this->quantidadeLancesPorUsuario($lance->getUsuario());
        if ($totalLancesDoUsuario >= 5) {
            return;
        }

        $this->lances[] = $lance;
    }

    /**
     * @return Lance[]
     */
    public function getLances(): array
    {
        return $this->lances;
    }

    public function ehDoUltimoUsuario(Usuario $usuario): bool
    {
        if (empty($this->lances)) {
            return false;
        }
        $ultimoLance = $this->lances[count($this->lances) - 1];
        return $ultimoLance->getUsuario() === $usuario;
    }

    private function quantidadeLancesPorUsuario(Usuario $usuario): int
    {
        return array_reduce($this->lances, function (int $total, Lance $lanceAtual) use ($usuario) {
            return $total + ($lanceAtual->getUsuario() === $usuario ? 1 : 0);
        }, 0);
    }
}
