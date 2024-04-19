import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";

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
        <Outlet />
      </AnnouncementWrapper>
    </AnnouncementListContext.Provider>
  );
};

export default Announcement;
