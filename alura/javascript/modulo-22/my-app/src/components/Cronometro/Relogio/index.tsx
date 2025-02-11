import React from "react";
import styles from "./Relogio.module.scss";

export default function Relogio() {
    return (
        <React.Fragment>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioNumero}>0</span>
        </React.Fragment>
    );
}