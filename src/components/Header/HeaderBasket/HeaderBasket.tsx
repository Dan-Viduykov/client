import { FC, useState } from "react";
import { faShoppingCart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderBasket.module.scss";
import { useRouter } from "next/router";

const HeaderBasket: FC = () => {
    const router = useRouter()
    const [ active, setActive ] = useState(false);

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

    return (
        <div className={styles.basket}>
            <button className={styles.basket__icon} onClick={() => setActive((state) => !state)}>
                <FontAwesomeIcon
                    color="white"
                    icon={faShoppingCart}
                />
            </button>
            {
                active ? 
                <div className={styles.basket__info}>
                    <ul className={styles.basket__list}>
                        {games.map(game => {
                            return (
                                <li key={game._id} className={`${styles.basket__item} ${styles.game}`}>
                                    <p className={styles.game__name}>{game.name}</p>
                                    <p className={styles.game__price}>{game.price}</p>
                                    <button className={styles.game__remove}>
                                        <FontAwesomeIcon color="white" icon={faTrashCan} />
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                    <p className={styles.basket__total}>
                        <span>Итого:</span>
                        <span>{games.reduce((total, game) => {
                            total += game.price;
                            return total
                        }, 0)} руб.</span>
                    </p>
                    <button
                        onClick={() =>router.push('/order')}
                        className={styles.basket__button}
                    >
                        Оформить заказ
                    </button>
                </div> : 
                null
            }
            
        </div>
    )
}

export default HeaderBasket