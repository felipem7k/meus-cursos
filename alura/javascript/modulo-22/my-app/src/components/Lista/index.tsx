import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import styles from "./Lista.module.scss";

export default function Lista(
    {tarefas}: { tarefas: ITarefa[] }
) {
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item
                        {...tarefa}
                        key={index}
                    />
                )
                )}
            </ul>
        </aside>
    );
}