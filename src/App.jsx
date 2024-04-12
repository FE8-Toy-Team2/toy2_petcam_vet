import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import "./font/font.css";
import ClinicLog from "./components/ClinicLog";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: "Pretendard";
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ClinicLog />
      {/* 여기밑에 라우터가 와요  */}
    </>
  );
}

export default App;