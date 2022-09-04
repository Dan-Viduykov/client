import { useRouter } from "next/router";
import { FC } from "react";
import Container from "@/components/Container";
import styles from "./Header.module.scss";
import HeaderBasket from "./HeaderBasket";

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
                <HeaderBasket />
            </Container>
        </header>
    )
}

export default Header