import { ITarefa } from "../../../types/tarefa";
import styles from "../Lista.module.scss";

export default function Item({tarefa, tempo, selecionado, completado, id}: ITarefa, key: number, ) {
    return (
        <li key={key} className={styles.item}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}