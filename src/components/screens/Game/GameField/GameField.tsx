import { FC, ReactNode } from "react";
import styles from "./GameField.module.scss";

interface GameFieldProps {
    label: string;
    children: ReactNode;
    className?: string;
}

const GameField: FC<GameFieldProps> = ({ children, className, label }) => {
    return (
        <div className={`${styles.field} ${className}`}>
            <h3 className={styles.field__title}>{label}</h3>
            <div className={styles.field__content}>
                {children}
            </div>
        </div>
    )
}

export default GameField