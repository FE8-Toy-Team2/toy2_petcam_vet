import Footer from "./Footer";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "../LoginSignup/Login";
import Signup from "../LoginSignup/Signup";
import ChartList from "../ChartList/ChartList";
import RegisterForm from "../RegisterForm/Register";
import { getAuth, signOut } from "firebase/auth";

import Announcement from "../Announcement";
import Chart from "../../pages/Chart";
import { Container } from "../ChartList/Styles";
import Home from "../Home";

function Layout() {
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
    <>
      <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
        <Route path="/announcement/*" element={<Announcement />} />
        <Route path="/chart" element={<ChartList />} />
        <Route path="chart/:id" element={<Chart />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
