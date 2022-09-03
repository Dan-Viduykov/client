import { FC } from "react";
import styles from "./CardButton.module.scss";

interface CardButtonProps {
    className?: string;
    handleClick?: (event) => void;
    active?: boolean;
}

const CardButton: FC<CardButtonProps> = ({ className, handleClick, active = false }) => {
    return (
        <button
            className={
                `${styles.button}
                 ${className}
                 ${active ? styles.button_remove : styles.button_add}`
            }
            onClick={handleClick}
        >
            {active ? 'убрать из корзины' : 'в корзину'}
        </button>
    )
}

export default CardButton