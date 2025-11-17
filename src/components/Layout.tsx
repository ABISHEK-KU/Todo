import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ContentArea, MainLayout, Overlay } from "@/style/mainLayout";



const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <MainLayout>
      <Header onMenuClick={toggleSidebar} />
      <Sidebar open={sidebarOpen} />
      {sidebarOpen && <Overlay onClick={closeSidebar} />}
      <ContentArea onClick={closeSidebar}>
        <Outlet />
      </ContentArea>
    </MainLayout>
  );
};

export default Layout;
