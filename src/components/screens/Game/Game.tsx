import { useRouter } from "next/router";
import { FC } from "react";
import Image from "next/image";
import { useGetGameByIdQuery } from "@/services/game.api";
import placeholder from '../../../assets/placeholder.jpg'
import styles from "./Game.module.scss";
import Tags from "@/components/Tags";
import Loading from "@/components/Loading";
import CardButton from "@/components/CardButton";
import GameField from "./GameField";

const Game: FC = () => {
    const {query: {id}} = useRouter()
    const {isLoading, isError, data: game} = useGetGameByIdQuery(id);

    const gameVideo = !game?.video || isLoading ? <Loading />
                        : <iframe
                            width="100%"
                            height="100%"
                            src={game.video}
                            title={game.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />;
    const gameImage = !game?.picture || isLoading ? <Loading />
                        : <Image
                            loader={() => game?.picture}
                            src={game?.picture}
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