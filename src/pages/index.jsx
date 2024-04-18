import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ChartList from "../components/ChartList/ChartList";

const RootRouter = () => {
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
    <Page>
      <Header
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <RouterWrapper>
        <Routes>
          <Route path="/" element={<ChartList />} />
          <Route path="/charts/*" element={<ChartList />} />
          <Route path="/charts/:id" element={<Chart />} />
        </Routes>
      </RouterWrapper>

      <Footer />
    </Page>
  );
};
export default RootRouter;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const RouterWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  justify-content: center;
`;
