import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";

const AnnouncementWrapper = styled.main`
  width: 1080px;
  margin: 0 auto;
`;

const Announcement = () => {
  const announcements = useContext(AnnouncementListContext);

  return (
    <AnnouncementListContext.Provider value={announcements}>
      <AnnouncementWrapper className="announcement">
        <Outlet />
      </AnnouncementWrapper>
    </AnnouncementListContext.Provider>
  );
};

export default Announcement;
