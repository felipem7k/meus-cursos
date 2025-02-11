import styles from "../Lista.module.scss";

export default function Item({key, tarefa, tempo}: {key: number, tarefa: string, tempo: string}) {
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