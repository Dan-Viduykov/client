import { FC } from "react";
import MainLayout from "../layouts/MainLayout";
import Purchase from "../components/screens/Purchase";

const Order: FC = () => {
    return (
        <MainLayout>
            <Purchase />
        </MainLayout>
    )
}

export default Order