import React, { ReactNode } from "react";
import styles from "./Botao.module.scss";

export default class Botao extends React.Component<{ children: ReactNode }> {
    render(): React.ReactNode {
        return (
            <button className={styles.botao}>
                {this.props.children}
            </button>
        )
    }
}
