import { GetStaticProps, NextPage } from "next";
import { initStore } from "../store/store";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/screens/Home";
import { getGames } from "../services/game.api";

const Index: NextPage = () => {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const store = initStore()
    const state = store.getState()
    const { gameLimit } = state.loadReducer
    
    await store.dispatch(getGames.initiate(gameLimit, gameLimit))
  
    return {props: { initialReduxState: store.getState()}
}}

export default Index