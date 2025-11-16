import { useTheme } from "@/context/useTheme";
import { logout } from "@/reducer/authReducer";
import { AppTitle, HeaderContainer, IconGroup } from "@/style/header";
import { CirclePower, Moon, Sun } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const Header: React.FC<NonNullable<unknown>> = () => {
  const dispatch = useDispatch();
  const {theme,toggleTheme}=useTheme()

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <AppTitle>ToDo</AppTitle>
      <IconGroup>
        {theme==="dark"?<Sun color="var(--foreground)" onClick={()=>toggleTheme()}/>:<Moon color="var(--foreground)" onClick={()=>toggleTheme()}/>}
        <CirclePower color="#ff4d4d" onClick={() => handleLogout()}/>
      </IconGroup>
    </HeaderContainer>
  );
};

export default Header;
