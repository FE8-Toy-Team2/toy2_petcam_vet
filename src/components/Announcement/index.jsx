import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Write from "./Write";

const AnnouncementWrapper = styled.main`
  width: 1080px;
  margin: 0 auto;
`;

const Announcement = () => {
  const announcements = useContext(AnnouncementListContext);

  return (
    <AnnouncementListContext.Provider value={announcements}>
      <AnnouncementWrapper className="announcement">
        <Routes>
          <Route 
            path="" 
            element={
              <>
                <Header />
                <Content />
              </>
            } 
          />
          <Route 
            path="write"
            element={<Write />}
          />
        </Routes>
      </AnnouncementWrapper>
    </AnnouncementListContext.Provider>
  );
};

export default Announcement;
