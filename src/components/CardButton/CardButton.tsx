import { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IGame } from "../../services/game.types";
import styles from "./CardButton.module.scss";

interface CardButtonProps {
    className?: string;
    game?: IGame;
    handleClick?: (event) => void;
    includesGame?: boolean;
}

const CardButton: FC<CardButtonProps> = ({ className, game, handleClick, includesGame }) => {
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