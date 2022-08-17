import { FC, ReactNode } from "react";
import Header from "../../components/Header";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

export default MainLayout