import { logout } from "@/reducer/authReducer";
import { AppTitle, HeaderContainer, LogoutButton } from "@/style/header";
import { CirclePower } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <HeaderContainer>
      <AppTitle>ToDo</AppTitle>
      <LogoutButton title="logout" onClick={() => handleLogout()}>
        <CirclePower />
      </LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
