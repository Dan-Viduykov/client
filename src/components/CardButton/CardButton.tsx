import { FC } from "react";
import styles from "./CardButton.module.scss";

interface CardButtonProps {
    className?: string;
    mode?: 'add' | 'remove';
}

const CardButton: FC<CardButtonProps> = ({ mode = 'add', className }) => {
    return (
        <button className={`${styles.button} ${className} ${mode === 'add' ? styles.button_add : styles.button_remove}`}>
            {mode === 'add' ? 'в корзину' : 'убрать из корзины'}
        </button>
    )
}

export default CardButton