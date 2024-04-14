import { BrowserRouter, Routes, Route } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Announcement from "./components/Announcement";
import "./font/font.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: "Pretendard", sans-serif;
  }
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
