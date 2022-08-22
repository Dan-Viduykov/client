import { FC } from "react";
import styles from "./GameCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { IGame } from "../../types/game";
import Tags from "../Tags";
import ErrorBoundary from "../ErrorBoundary";

interface GameCardProps {
    className?: string;
    game: IGame;
}

const GameCard: FC<GameCardProps> = ({game, className}) => {
    const router = useRouter();
    
    return (
        <a className={styles.card} onClick={() => router.push(`/game/${game._id}`)}>
            <div className={styles.card__img}>
                <Image
                    loader={() => `http://localhost:5000/${game.picture}`}
                    src={`http://localhost:5000/${game.picture}`}
                    unoptimized={true}
                    priority={true}
                    width={324}
                    height={151}
                    layout="responsive"
                    alt={game.name}
                />
            </div>
            <div className={styles.card__content}>
                <h2 className={styles.card__title}>{game.name}</h2>
                <Tags tags={game.tags} count={3} />
                <div className={styles.card__bottom}>
                    <p className={styles.card__price}>{game.price} руб.</p>
                    <button className={`${styles.card__button} ${styles.card__button_add}`}>В корзину</button>
                    {/* <button className={styles.card__button_remove}></button> */}
                </div>
            </div>
        </a>
    )
}

export default GameCard