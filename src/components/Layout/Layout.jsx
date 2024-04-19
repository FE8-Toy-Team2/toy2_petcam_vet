import Clock from "./Clock";
import Footer from "./Footer";
import Nav from "./Nav";
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Login from "../LoginSignup/Login";
import Signup from "../LoginSignup/Signup";
import Content from "../Announcement/Content"
import ChartList from "../ChartList/ChartList"
import RegisterForm from "../RegisterForm/Register"
import { getAuth, signOut } from "firebase/auth";

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
        <Route path="/" element={<div>hello</div>} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />     
        <Route path="/announce" element={<Content />} />     
        <Route path="/chartlist" element={<ChartList />} />     
        <Route path="/register" element={<RegisterForm />} />     
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
