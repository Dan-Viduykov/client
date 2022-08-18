import { FC } from "react";
import GameCard from "../../GameCard";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
        </>
    )
}

export default Home