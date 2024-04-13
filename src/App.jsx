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

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Login />
      {/* <Signup /> */}
      <Footer />
    </>
  );
}

export default App;
