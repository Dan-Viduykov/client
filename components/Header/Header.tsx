import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { FC } from "react";
import Container from "../Container";
import styles from "./Header.module.scss";

const Header: FC = () => {
    const router = useRouter()

    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <h1
                    className={styles.header__title}
                    onClick={() => router.push('/')}
                >
                    Game Store
                </h1>
                <div className={styles.header__basket}>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </div>
            </Container>
        </header>
    )
}

export default Header