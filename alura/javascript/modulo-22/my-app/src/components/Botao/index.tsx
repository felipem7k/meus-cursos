import React, { ReactNode } from "react";
import styles from "./Botao.module.scss";

export default class Botao extends React.Component<{  
    children: ReactNode,
    type?: "button" | "submit" | "reset" | undefined 
}> {
    render(): React.ReactNode {
        const { type = "button", children } = this.props; 
        return (
            <button type={type} className={styles.botao}>
                {children}
            </button>
        )
    }
}
