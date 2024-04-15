import React, { useState } from 'react';
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import app from "./firebase"

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <GlobalStyle />
      <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Login onLogin={handleLogin} />
      <Signup onLogin={handleLogin} />
      <Footer />
    </>
  );
}

export default App;
