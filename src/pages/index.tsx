import { GetServerSideProps, NextPage } from "next";
import { initStore } from "../store/store";
import { getGames } from "../services/game.api";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/screens/Home";

const Index: NextPage = () => {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const store = initStore();
    
    await store.dispatch(getGames.initiate({count: 8, offset: 8}))
  
    return {props: { initialReduxState: store.getState()}
}}

export default Index