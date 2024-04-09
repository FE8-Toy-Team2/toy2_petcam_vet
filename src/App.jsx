import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Login from "./components/Login";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Login />
      {/* 여기밑에 라우터가 와요  */}
    </>
  );
}

export default App;
