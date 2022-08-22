import { GetServerSideProps, NextPage } from "next";
import { getGameById } from "../../services/game.api";
import { initStore } from "../../store/store";
import Game from "../../components/screens/Game";
import MainLayout from "../../layouts/MainLayout";

const GamePage: NextPage  = () => {
    return (
        <MainLayout>
            <Game />
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (params) => {
    const store = initStore();
    
    await store.dispatch(getGameById.initiate(params.query.id))
  
    return {props: { initialReduxState: store.getState()}
}}


export default GamePage