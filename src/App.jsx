import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import Nav from "./components/LoginSignup/Nav";
import Footer from "./components/LoginSignup/Footer";
import app from "./firebase";
import { getAuth, signOut } from "firebase/auth";
import Home from "./components/LoginSignup/Home";
import "./font/font.css";
import ClinicLog from "./components/Chart/ClinicLog";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --color-prime: #FFCD29;
    --color-black: #3D3939;
    --color-white: #FFFFFF;
    --color-gray-1: #F6F6F6;
    --color-gray-2: #EEEEEE;
    --color-gray-3: #D9D9D9;
    --color-darkgray: #999999;
    --color-salgu: #F9F4F0;
    --color-brown: #504239;

    --font-weight-light: 400;
    --font-weight-bold: 700;

    --font-size-XS: 0.8rem;
    --font-size-S: 0.9rem;
    --font-size-M: 1rem;
    --font-size-L: 1.1rem;
    --font-size-XL: 1.2rem;
    --font-size-XXL: 1.5rem;
  }
  body{
    font-family: "Pretendard", sans-serif;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        alert("로그아웃하셨습니다");
      })
      .catch((error) => {
        alert("에러 발생", error);
      });
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Home />
      <Login onLogin={handleLogin} />
      <Signup onLogin={handleLogin} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
