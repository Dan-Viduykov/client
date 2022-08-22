import { useRouter } from "next/router";
import { FC } from "react";
import Image from "next/image";
import Tags from "../../Tags";
import { useGetGameByIdQuery } from "../../../services/game.api";
import placeholder from '../../../assets/placeholder.jpg'
import styles from "./Game.module.scss";
import Loading from "../../Loading";

const Game: FC = () => {
    const {query: {id}} = useRouter()
    const {isLoading, isError, data: game} = useGetGameByIdQuery(id);

    const gameVideo = !game?.video || isLoading ? <Loading />
                        : <video src={`http://localhost:5000/${game?.video}`} controls />;
    const gameImage = !game?.video || isLoading ? <Loading />
                        : <Image
                            loader={() => `http://localhost:5000/${game?.picture}`}
                            src={`http://localhost:5000/${game?.picture}`}
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
            <div className={styles.game__video}>
                {gameVideo}
            </div>
            <div className={styles.game__info}>
                <div className={styles.game__img}>
                    {gameImage}
                </div>
                <p className={styles.game__description}>{game?.description}</p>
                <Tags tags={game?.tags} />
                <div className={styles.game__infoBottom}>
                    <p className={styles.game__price}>{game?.price} руб.</p>
                    <button className={styles.game__button}>В корзину</button>
                </div>
            </div>
        </div>
    )
}

export default Game