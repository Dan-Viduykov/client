import { FC } from "react";
import styles from "./GameCard.module.scss";
import Image from "next/image";

interface GameCardProps {
    className?: string;
    game: any;
}

const GameCard: FC<GameCardProps> = ({game, className}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <Image
                    src={game.picture}
                    alt=""
                />
            </div>
            <div className={styles.card__content}>
                <h2 className={styles.card__title}>{game.name}</h2>
                <ul className={styles.card__tags}>
                    {game.tags.map((tag, index) => <li key={index} className={styles.card__tag}>{tag}</li>)}
                </ul>
                <div className={styles.card__bottom}>
                    <p className={styles.card__price}>{game.price} руб.</p>
                    <button className={`${styles.card__button} ${styles.card__button_add}`}>В корзину</button>
                    {/* <button className={styles.card__button_remove}></button> */}
                </div>
            </div>
        </div>
    )
}

export default GameCard