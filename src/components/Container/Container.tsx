import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <main className={`${styles.main} ${className}`}>
            {children}
        </main>
    )
}

export default Container