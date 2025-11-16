import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ContentArea, MainLayout } from "@/style/mainLayout";

const Layout: React.FC = () => {
    return (
        <MainLayout>
            <Header />
            <Sidebar />
            <ContentArea>
                <Outlet />
            </ContentArea>
        </MainLayout>
    );
};

export default Layout;
