import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Announcement from "./components/Announcement";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Announcement />
    </>
  );
}

export default App;
