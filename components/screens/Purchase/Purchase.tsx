import { FC } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "./Purchase.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Purchase: FC = () => {
    const { games } = useTypedSelector(state => state.basketReducer)

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