import { FC } from "react";
import styles from "./CardButton.module.scss";

interface CardButtonProps {
    className?: string;
    handleClick?: (event) => void;
    includesGame?: boolean;
}

const CardButton: FC<CardButtonProps> = ({ className, handleClick, includesGame }) => {
    return (
        <button
            className={
                `${styles.button}
                 ${className}
                 ${includesGame ? styles.button_remove : styles.button_add}`
            }
            onClick={handleClick}
        >
            {includesGame ? 'убрать из корзины' : 'в корзину'}
        </button>
    )
}

export default CardButton