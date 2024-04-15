import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import "./font/font.css";
import ResisterForm from "./components/ResisterForm";


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
      {/* 여기밑에 라우터가 와요  */}
      <ResisterForm />

    </>
  );
}

export default App;
