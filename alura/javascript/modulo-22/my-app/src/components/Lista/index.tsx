import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import styles from "./Lista.module.scss";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista(
    {tarefas, selecionaTarefa}: Props
) {
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        {...tarefa}
                        selecionaTarefa={selecionaTarefa}
                    />
                )
                )}
            </ul>
        </aside>
    );
}