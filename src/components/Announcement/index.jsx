import { useContext } from "react";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const AnnouncementWrapper = styled.main`
  width: 1080px;
  margin: 0 auto;
`;

const Announcement = () => {
  const announcements = useContext(AnnouncementListContext);

  return (
    <AnnouncementListContext.Provider value={announcements}>
      <AnnouncementWrapper className="announcement">
        <Header />
        <Content />
      </AnnouncementWrapper>
    </AnnouncementListContext.Provider>
  );
};

export default Announcement;
