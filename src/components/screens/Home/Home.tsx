import { FC } from "react";
import GameCard from "../../GameCard";
import GameList from "../../GameList";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <>
            <GameList />
        </>
    )
}

export default Home