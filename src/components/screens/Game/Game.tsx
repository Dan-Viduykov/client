import { useRouter } from "next/router";
import { FC } from "react";
import Image from "next/image";
import Tags from "../../Tags";
import { useGetGameByIdQuery } from "../../../services/game.api";
import placeholder from '../../../assets/placeholder.jpg'
import styles from "./Game.module.scss";
import Loading from "../../Loading";
import GameField from "./GameField";
import CardButton from "../../CardButton";

const Game: FC = () => {
    const {query: {id}} = useRouter()
    const {isLoading, isError, data: game} = useGetGameByIdQuery(id);

    const gameVideo = !game?.video || isLoading ? <Loading />
                        : <video src={`https://game-shopping.herokuapp.com/${game?.video}`} controls />;
    const gameImage = !game?.video || isLoading ? <Loading />
                        : <Image
                            loader={() => `https://game-shopping.herokuapp.com/${game?.picture}`}
                            src={`https://game-shopping.herokuapp.com/${game?.picture}`}
                            unoptimized={true}
                            priority={true}
                            width={324}
                            height={151}
                            layout="responsive"
                            alt={game?.name}
                        />

    return (
        <div className={styles.game}>
            <h1 className={styles.game__title}>{game?.name}</h1>
            <GameField className={styles.game__video} label="Ttailer">
                {gameVideo}
            </GameField>
            <div className={styles.game__infoBottom}>
                <p className={styles.game__price}>{game?.price} руб.</p>
                <CardButton />
            </div>
            <GameField className={styles.game__info} label="About game">
                <p className={styles.game__description}>{game?.description}</p>
            </GameField>
            <div className={styles.game__img}>
                {gameImage}
            </div>
            <GameField className={styles.game__tags} label="Tags for game">
                <Tags tags={game?.tags} />
            </GameField>
        </div>
    )
}

export default Game