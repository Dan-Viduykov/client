import React, { FC, MouseEvent } from "react";
import styles from "./GameCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Tags from "../Tags";
import CardButton from "../CardButton";
import { IGame } from "../../services/game.types";
import { useActions } from '../../hooks/useActions'

interface GameCardProps {
    className?: string;
    game: IGame;
}

const GameCard: FC<GameCardProps> = ({game, className}) => {
    const router = useRouter(); 
    const {} = useActions()
    
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        router.push(`/game/${game._id}`);
    }

    return (
        <a className={styles.card} onClick={handleClick}>
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
                <Tags className={styles.card__tags} tags={game.tags} count={3} />
                <div className={styles.card__bottom}>
                    <p className={styles.card__price}>{game.price} руб.</p>
                    <CardButton game={game} />
                </div>
            </div>
        </a>
    )
}

export default GameCard