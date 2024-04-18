import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import RootRouter from "./pages";
import { getAuth, signOut } from "firebase/auth";
import app from "./firebase";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
