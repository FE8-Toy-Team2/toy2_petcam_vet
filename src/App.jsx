import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle>{/* 여기에 다른 컴포넌트들이 들어옵니다! */}</GlobalStyle>
    </>
  );
}

export default App;
