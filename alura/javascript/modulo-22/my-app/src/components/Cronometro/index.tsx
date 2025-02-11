import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";

export default function Cronometro() {
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio></Relogio>
            </div>
            <Botao>Começar!</Botao>
        </div>
    );
}