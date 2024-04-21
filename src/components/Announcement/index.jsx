import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LogInContext } from "../../context/LogInContext";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import PropTypes from "prop-types";
import Header from "./Header";
import Content from "./Content";
import Write from "./Write";
import Post from "./Post";

const AnnouncementWrapper = styled.main`
  width: 60%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Announcement = ({ isLoggedIn }) => {
  const newAnnouncementContext = useContext(AnnouncementListContext);
  const [announcements, setAnnouncements] = useState(newAnnouncementContext);
  const [filter, setFilter] = useState("");

  return (
    <LogInContext.Provider value={isLoggedIn}>
      <AnnouncementListContext.Provider value={[announcements, setAnnouncements]}>
        <AnnouncementWrapper className="announcement">
          <Routes>
            <Route
              path=""
              element={
                <>
                  <Header title="공지사항" setFilter={setFilter} />
                  <Content filter={filter} />
                </>
              }
            ></Route>
            <Route
              path="write"
              element={
              <>
                <Header title="새 글 쓰기" />
                <Write />
              </>
            }
            ></Route>
            <Route 
              path=":id"
              element={
              <>
                <Header title="공지사항" />
                <Post />
              </>}
            ></Route>
            <Route
              path=":id/edit"
              element={
                <>
                  <Header title="수정하기" />
                  <Write />
                </>
              }
            ></Route>
          </Routes>
        </AnnouncementWrapper>
      </AnnouncementListContext.Provider>
    </LogInContext.Provider>
  );
};

Announcement.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Announcement;
