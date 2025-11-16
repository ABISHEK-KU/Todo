import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import type { LoginData } from "@/types";
import { LoginMain } from "@/style/login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "@/reducer/authReducer";

const HARDCODED_CREDENTIALS = {
  userName: "abishekKumar",
  password: "Innoppl@123",
};

export default function Login() {
  const [userData, setUserData] = useState<LoginData>({
    userName: "",
    password: "",
  });
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData: LoginData) => ({
      ...prevData,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = (): boolean => {
    if (!userData.userName.trim()) {
      setError("Username is required");
      return false;
    }
    if (!userData.password) {
      setError("Password is required");
      return false;
    }
    if (userData.userName.length < 3) {
      setError("Username must be at least 3 characters");
      return false;
    }
    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (
        userData.userName === HARDCODED_CREDENTIALS.userName &&
        userData.password === HARDCODED_CREDENTIALS.password
      ) {
        dispatch(login({ user: userData.userName, token: "token-123" }));
        navigate("/");
      } else {
        setError("Invalid username or password. Please try again.");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <LoginMain>
      <LoginForm
        userData={userData}
        viewPassword={viewPassword}
        setViewPassword={setViewPassword}
        handleChange={handleChange}
        handleLogin={handleLogin}
        error={error}
        isLoading={isLoading}
      />
    </LoginMain>
  );
}
