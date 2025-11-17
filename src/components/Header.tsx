import { useTheme } from "@/context/useTheme";
import { logout } from "@/reducer/authReducer";
import {
  AppTitle,
  HeaderContainer,
  IconGroup,
  HamburgerButton,
  MenuandAppTitleContainer,
} from "@/style/header";
import { CirclePower, Moon, Sun, Menu } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <MenuandAppTitleContainer>
        <HamburgerButton aria-label="Open menu" onClick={onMenuClick}>
          <Menu size={20} />
        </HamburgerButton>
        <AppTitle>ToDo</AppTitle>
      </MenuandAppTitleContainer>
      <IconGroup>
        {theme === "dark" ? (
          <Sun color="var(--foreground)" onClick={() => toggleTheme()} />
        ) : (
          <Moon color="var(--foreground)" onClick={() => toggleTheme()} />
        )}
        <CirclePower color="#ff4d4d" onClick={() => handleLogout()} />
      </IconGroup>
    </HeaderContainer>
  );
};

export default Header;
