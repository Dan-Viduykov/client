import { FC } from "react";
import Game from "../../components/screens/Game";
import MainLayout from "../../layouts/MainLayout";

const GamePage: FC = () => {
    return (
        <MainLayout>
            <Game />
        </MainLayout>
    )
}

export default GamePage