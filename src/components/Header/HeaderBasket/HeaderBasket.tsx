import { FC, useState } from "react";
import { faShoppingCart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderBasket.module.scss";
import { useRouter } from "next/router";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const HeaderBasket: FC = () => {
    const router = useRouter()
    const [ active, setActive ] = useState(false);
    const { games } = useTypedSelector(state => state.basketReducer)

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