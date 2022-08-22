import { FC } from "react";
import styles from "./ErrorComponent.module.scss";

interface ErrorComponentProps {
    message?: string;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
    return (
        <div className={styles.error}>
            <h2 className={styles.error__title}>Oh!!! Some Error</h2>
            {message ? <p className={styles.error__text}>{message}</p> : null}
        </div>
    )
}

export default ErrorComponent