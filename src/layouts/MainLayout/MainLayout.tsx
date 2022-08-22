import { FC, ReactNode } from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <Container className={styles.container}>
                {children}
            </Container>
        </div>
    )
}

export default MainLayout