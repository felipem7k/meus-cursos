import React from "react";
import styles from "./Lista.module.scss";

export default function Lista(): React.ReactElement {
    const tarefas = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "Javascript",
            tempo: "01:00:00"
        },
        {
            tarefa: "Typescript",
            tempo: "03:00:00"
        }
    ];
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li className={styles.item} key={index}>
                        <h3>
                            {tarefa.tarefa}
                        </h3>
                        <span>
                            {tarefa.tempo}
                        </span>
                    </li>
                )
                )}
            </ul>
        </aside>
    );
}