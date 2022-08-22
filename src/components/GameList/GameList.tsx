import { FC } from "react";
import styles from "./GameList.module.scss";
import GameCard from "../GameCard";
import { useGetGamesQuery } from "../../services/game.api";

const GameList: FC = () => {    
    const {isLoading, isError, data} = useGetGamesQuery(8, 0)

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