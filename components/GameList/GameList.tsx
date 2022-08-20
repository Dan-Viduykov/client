import { FC } from "react";
import styles from "./GameList.module.scss";
import GameCard from "../GameCard";
import { useSearchGameQuery } from "../../services/game.api";

const GameList: FC = () => {    
    const {isLoading, isError, data} = useSearchGameQuery('')

    return (
        <ul className={styles.list}>
            {data?.map(game => {
                return <GameCard
                    className={styles.list__item}
                    key={game._id}
                    game={game}
                />
            })}
        </ul>
    )
}

export default GameList