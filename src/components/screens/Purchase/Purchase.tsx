import { FC } from "react";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import styles from "./Purchase.module.scss";
import PurchaseItem from "./PurchaseItem";

const Purchase: FC = () => {
    const { games } = useTypedSelector(state => state.basketReducer)

    const totalPrice = games.reduce((total, game) => total += game.price, 0);
    const items = games.map(game => <PurchaseItem key={game._id} className={styles.order__item} game={game} />)

    return (
        <div className={styles.order}>
            <p className={styles.order__total}>{games.length} товара на сумму {totalPrice}</p>
            <ul className={styles.order__list}>
                {items}
            </ul>
        </div>
    )
}

export default Purchase