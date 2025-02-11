import React from "react";
import styles from "./Botao.module.scss";

export default class Botao extends React.Component {
    render(): React.ReactNode {
        return (
            <button className={styles.botao}>
                Botão
            </button>
        )
    }
}