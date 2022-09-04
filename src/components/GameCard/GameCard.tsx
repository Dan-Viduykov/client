import React, { FC, MouseEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { IGame } from "@/services/game.types";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import CardButton from "@/components/CardButton";
import Tags from "@/components/Tags";
import styles from "./GameCard.module.scss";

interface GameCardProps {
    className?: string;
    game: IGame;
}

const GameCard: FC<GameCardProps> = ({ game, className }) => {
    const router = useRouter(); 
    const { games } = useTypedSelector(state => state.basketReducer);
    const { addGame, removeGame } = useActions()

    const include = Boolean(games.filter((item) => item._id === game._id))
    const [ includes, setIncludes ] = useState<boolean>(include)
    
    const handleClickCard = (event: MouseEvent<HTMLAnchorElement>) => {
        router.push(`/game/${game._id}`);
    } 
    const hadleClickButton = (event: MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
        setIncludes(state => !state)
        includes ? addGame(game) : removeGame(game._id)
    }

    const price = game.price === 0 ? 'Бесплатно' : `${game.price} руб`

    return (
        <a className={`${styles.card} ${className}`} onClick={handleClickCard}>
            <div className={styles.card__img}>
                <Image
                    loader={() => `${game.picture}`}
                    src={`${game.picture}`}
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
                    <p className={styles.card__price}>{price}</p>
                    <CardButton handleClick={hadleClickButton} active={!includes} />
                </div>
            </div>
        </a>
    )
}

export default GameCard