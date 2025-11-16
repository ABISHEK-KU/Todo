import { SidebarContainer, SidebarItem } from "@/style/sidebar";
import React from "react";
import { useNavigate } from "react-router";

const Sidebar: React.FC<NonNullable<unknown>> = () => {
  const navigate = useNavigate();
  const data = [
    { path: "/", title: "Dashboard" },
    { path: "/profile", title: "Profile" },
    { path: "/todo", title: "Todo" },
  ];

  return (
    <SidebarContainer>
      {data.map((item) => (
        <SidebarItem onClick={() => navigate(item.path)} key={item.path}>
          {item.title}
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
