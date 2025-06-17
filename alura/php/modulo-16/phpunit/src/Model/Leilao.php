<?php

namespace Alura\Leilao\Model;

class Leilao
{
    /** @var Lance[] */
    private $lances;
    /** @var string */
    private $descricao;

    private bool $finalizado;

    public function __construct(string $descricao)
    {
        $this->descricao = $descricao;
        $this->lances = [];
        $this->finalizado = false;
    }

    public function recebeLance(Lance $lance)
    {
        if ($this->ehDoUltimoUsuario($lance->getUsuario())) {
            throw new \DomainException(
                'Usuário não pode dar dois lances seguidos.'
            );
        }

        $totalLancesDoUsuario = $this->quantidadeLancesPorUsuario($lance->getUsuario());
        if ($totalLancesDoUsuario >= 5) {
            throw new \DomainException(
                'Usuário não pode dar mais de 5 lances.'
            );
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

    public function finaliza()
    {
        $this->finalizado = true;
    }

    public function isFinalizado(): bool
    {
        return $this->finalizado;
    }

    private function quantidadeLancesPorUsuario(Usuario $usuario): int
    {
        return array_reduce($this->lances, function (int $total, Lance $lanceAtual) use ($usuario) {
            return $total + ($lanceAtual->getUsuario() === $usuario ? 1 : 0);
        }, 0);
    }
}
