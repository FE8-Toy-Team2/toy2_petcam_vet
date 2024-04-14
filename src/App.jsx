import { BrowserRouter, Routes, Route } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Announcement from "./components/Announcement";
import AnnouncementHeader from "./components/Announcement/Header";
import AnnouncementContent from "./components/Announcement/Content";
import AnnouncementWrite from "./components/Announcement/Write";
import "./font/font.css";
// TODO: 폰트 적용 안되는 오류 수정

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
          <Route path="/announcement" element={<Announcement />}>
            <Route
              path=""
              element={
                <>
                  <AnnouncementHeader />
                  <AnnouncementContent />
                </>
              }
            ></Route>
            <Route
              path="write"
              element={<AnnouncementWrite />}
            ></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
