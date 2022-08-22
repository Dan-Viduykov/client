import MainLayout from "../layouts/MainLayout";
import Purchase from "../components/screens/Purchase";
import { NextPage } from "next";

const Order: NextPage = () => {
    return (
        <MainLayout>
            <Purchase />
        </MainLayout>
    )
}

export default Order