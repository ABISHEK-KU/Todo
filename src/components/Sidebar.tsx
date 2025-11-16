import { SidebarContainer, SidebarItem } from "@/style/sidebar";
import React from "react";
import { useLocation, useNavigate } from "react-router";

const Sidebar: React.FC<NonNullable<unknown>> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const data = [
    { path: "/", title: "Dashboard" },
    { path: "/todo", title: "Todo" },
    { path: "/profile", title: "Profile" },
  ];

  return (
    <SidebarContainer>
      {data.map((item) => (
        <SidebarItem
          $active={item.path === pathname}
          onClick={() => navigate(item.path)}
          key={item.path}
        >
          {item.title}
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
