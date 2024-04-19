import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Write from "./Write";
import Post from "./Post";

const AnnouncementWrapper = styled.main`
  width: 1080px;
  margin: 0 auto;
`;

const Announcement = () => {
  const newAnnouncementContext = useContext(AnnouncementListContext);
  const [announcements, setAnnouncements] = useState(newAnnouncementContext);

  return (
    <AnnouncementListContext.Provider value={[announcements, setAnnouncements]}>
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
          ></Route>
          <Route
            path="write"
            element={<Write />}
          ></Route>
          <Route 
            path=":id"
            element={
            <>
              <Header />
              <Post />
            </>}
          ></Route>
          <Route
            path=":id/edit"
            element={<Write />}
          ></Route>
        </Routes>
      </AnnouncementWrapper>
    </AnnouncementListContext.Provider>
  );
};

export default Announcement;
