import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import ClinicLog from "./conponents/ClinicLog";


const GlobalStyle = createGlobalStyle`
  ${reset}
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
