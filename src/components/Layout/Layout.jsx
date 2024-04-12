import Header from "./Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
`;

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
