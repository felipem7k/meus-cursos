import React, { useState } from "react";
import Botao from "../Botao";
import styles from "./Formulario.module.scss";
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({
    setTarefas
}: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                    }
            ]
        );
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                type="text" 
                name="tarefa"
                value={tarefa}
                onChange={evento => setTarefa(evento.target.value)}
                id="tarefa"
                placeholder="O que deseja estudar"
                required
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                type="time"
                step="1"
                name="tempo"
                value={tempo}
                onChange={evento => setTempo(evento.target.value)}
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}
