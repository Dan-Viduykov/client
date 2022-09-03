import { FC } from "react";
import Image from "next/image";
import { IGame } from "../../../../services/game.types";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PurchaseItem.module.scss";

interface PurchaseItemProps {
    className?: string;
    game: IGame;
}

const PurchaseItem: FC<PurchaseItemProps> = ({className, game}) => {
    return (
        <li className={`${styles.game} ${className}`}>
            <div className={styles.game__img}>
                <Image
                    loader={() => game.picture}
                    src={game.picture}
                    unoptimized={true}
                    priority={true}
                    width={'100%'}
                    height={'100%'}
                    layout="responsive"
                    alt={game.name}
                />
            </div>
            <div className={styles.game__content}>
                <h2 className={styles.game__name}>{game.name}</h2>
                <p className={styles.game__price}>{game.price} руб.</p>
                <button className={styles.game__del}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </li>
    )
}

export default PurchaseItem