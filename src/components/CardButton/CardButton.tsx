import { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IGame } from "../../services/game.types";
import styles from "./CardButton.module.scss";

interface CardButtonProps {
    className?: string;
    game: IGame;
}

const CardButton: FC<CardButtonProps> = ({ className, game }) => {
    const { games } = useTypedSelector(state => state.basketReducer)
    const { addGame, removeGame } = useActions();
    const [ includes, setIncludes ] = useState(games.includes(item => item._id === game._id))
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        if (!includes) {
            addGame(game)
            setIncludes(true)
        } else {
            removeGame(game._id)
            setIncludes(false)
        }
    }
    
    return (
        <button
            className={
                `${styles.button}
                 ${className}
                 ${!includes ? styles.button_add : styles.button_remove}`
            }
            onClick={handleClick}
        >
            {!includes ? 'в корзину' : 'убрать из корзины'}
        </button>
    )
}

export default CardButton