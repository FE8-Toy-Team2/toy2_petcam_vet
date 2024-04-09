import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import ClinicLog from "./components/ClinicLog";

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

function App() {
  return (
    <>
      {/* <GlobalStyle> */}
        <ClinicLog />
      {/* </GlobalStyle> */}
    </>
  );
}

export default App;
