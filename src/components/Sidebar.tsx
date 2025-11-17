import { SidebarContainer, SidebarItem } from "@/style/sidebar";
import React from "react";
import { useLocation, useNavigate } from "react-router";

interface SidebarProps {
  open?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open = false }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const data = [
    { path: "/", title: "Dashboard" },
    { path: "/todo", title: "Todo" },
    { path: "/profile", title: "Profile" },
  ];

  return (
    <SidebarContainer $open={open}>
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
