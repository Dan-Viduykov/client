import { FC } from "react";
import styles from "./Loading.module.scss";

const Loading: FC = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loading__content}>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Loading