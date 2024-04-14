import { BrowserRouter, Routes, Route } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Announcement from "./components/Announcement";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/announcement" element={<Announcement />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
