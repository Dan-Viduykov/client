import { FC } from "react";
import Image from "next/image";
import styles from "./Game.module.scss";

interface GameProps {
    gameId?: string;
}

const Game: FC<GameProps> = ({ gameId }) => {
    const game = {
        _id: "62fb215a3d106c21d85ab25a",
        name: "Hello Neighbor",
        studio: "Dynamic Pixels",
        publisher: "tinyBuild",
        price: 515,
        date: "8 дек. 2017",
        genre: "survival horror, стелс",
        tags: [
            "Хоррор",
            "Песочница",
            "Приключенческий экшен",
            "Стелс",
            "Хоррор на выживание",
            "Глубокий сюжет",
            "От первого лица",
            "3D-платформер",
            "Сложная",
            "Шутер от первого лица",
            "Выживание",
            "Стратегия",
            "3D",
            "Смешная",
            "Психологический хоррор",
            "Чёрный юмор",
            "Несколько концовок",
            "Сюрреалистичная",
            "Для всей семьи",
            "Экшен"
        ],
        description: "Hello Neighbor — игра в жанре хоррор, в которой игроку нужно проникнуть в соседский дом и узнать, что скрывает его зловещий сосед. Твой противник - искусственный интеллект, который учится на всех твоих действиях: любишь забираться в дом через окно? — Не попадись в капкан. Пытаешься убежать? — Он найдёт способ перехватить тебя.",
        rating: 39,
        picture: "http://localhost:5000/image/a57e4e5d-72c2-4eb9-9be1-f594cbd46fb2.jpg",
        video: "http://localhost:5000/video/9de54657-2b7b-40ef-9359-9dabaed48ff5.webm",
        comments: [ ],
        __v: 0
    }

    return (
        <div className={styles.game}>
            <h1 className={styles.game__title}>{game.name}</h1>
            <div className={styles.game__video}>
                <video src={game.video} controls />
            </div>
            <div className={styles.game__info}>
                <div className={styles.game__img}>
                    <Image
                        loader={() => game.picture}
                        unoptimized={true}
                        width={16}
                        height={9}
                        layout="responsive"
                        src={game.picture}
                        alt=''
                    />
                </div>
                <p className={styles.game__description}>{game.description}</p>
                <ul className={styles.game__tags}>
                    {game.tags.map(tag => {
                        return <li className={styles.game__tag} key={tag}>
                            {tag}
                        </li>
                    })}
                </ul>
                <div className={styles.game__infoBottom}>
                    <p className={styles.game__price}>{game.price} руб.</p>
                    <button className={styles.game__button}>В корзину</button>
                </div>
            </div>
        </div>
    )
}

export default Game