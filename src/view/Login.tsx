import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import type { LoginData } from "@/types";
import { LoginMain } from "@/style/login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "@/reducer/authReducer";

export default function Login() {
  const [userData, setUserData] = useState<LoginData>({
    userName: "",
    password: "",
  });
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData: LoginData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userData.userName || !userData.password) {
      alert("Please fill all the fields");
      return;
    }
    
    if (
      userData.userName === "abishekKumar" &&
      userData.password === "Innoppl@123"
    ) {
      dispatch(login({ user: userData?.userName, token: "token-123" }));
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <LoginMain>
      <LoginForm
        userData={userData}
        viewPassword={viewPassword}
        setViewPassword={setViewPassword}
        handleChange={handleChange}
        handleLogin={handleLogin}
      />
    </LoginMain>
  );
}
