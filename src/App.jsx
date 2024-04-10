import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout/Layout";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
