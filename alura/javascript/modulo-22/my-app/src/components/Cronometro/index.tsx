import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({
    selecionado,
    finalizarTarefa
}: Props) {
    const [tempo, setTempo] = useState<number>();
    
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado?.tempo));
        }
    }, [
        selecionado
    ])
    
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador <= 0) {
                finalizarTarefa();
                return;
            }
            setTempo(contador - 1);
            return regressiva(contador - 1);
        }, 1000)
    }

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <Botao
                onClick={() => regressiva(tempo)}
            >Começar!</Botao>
        </div>
    );
}