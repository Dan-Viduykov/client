import { FC } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "./Purchase.module.scss";

const Purchase: FC = () => {
    const games = [
        {
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
        },
        {
            _id: "62fb215a3d106c21d85ab25b",
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
        },
        {
            _id: "62fb215a3d106c21d85ab25c",
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
    ]

    const totalPrice = games.reduce((total, game) => total += game.price, 0)

    return (
        <div className={styles.order}>
            <p className={styles.order__total}>3 товара на сумму {totalPrice}</p>
            <ul className={styles.order__list}>
                {games.map(game => {
                    return (
                        <li key={game._id} className={`${styles.order__item} ${styles.game}`}>
                            <div className={styles.game__img}>
                                <Image
                                    src={game.picture}
                                    loader={() => game.picture}
                                    width={200}
                                    height={200}
                                    alt={game.name}
                                />
                            </div>
                            <h2 className={styles.game__name}>{game.name}</h2>
                            <p className={styles.game__price}>{game.price} руб.</p>
                            <button className={styles.game__del}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Purchase