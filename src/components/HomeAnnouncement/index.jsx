import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";

const HomeAnnouncementWrapper = styled.section`
  align-self: flex-start;
  h3 {
    font-size: 2rem;
    margin-bottom: 8px;
  }
`;

const HomeAnnoucementListButton = styled.button`
  padding: 0;
  margin: 8px 0;
  border: none;
  background-color: inherit;
  font-family: inherit;
  font-size: 1.1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const HomeAnnouncement = () => {
  const newAnnouncementContext = useContext(AnnouncementListContext);
  const [announcements, setAnnouncements] = useState(newAnnouncementContext.filter(announcement => Number(announcement.date) > new Date().valueOf() - 1000 * 60 * 60 * 24));
  const navigate = useNavigate();

  return (
    <AnnouncementListContext.Provider value={[announcements, setAnnouncements]}>
      <HomeAnnouncementWrapper>
        <h3>새로 올라온 글</h3>
        <p>공지사항을 잘 확인해 주세요!</p>
        <ul>
          {announcements.map((announcement, index) => {
            return (
              <li key={announcement.title}>
                <HomeAnnoucementListButton type="button" onClick={() => { navigate(`/announcement/${index+1}`) }}>
                  {announcement.title}
                </HomeAnnoucementListButton>
              </li>
            );
          })}
        </ul>
      </HomeAnnouncementWrapper>
    </AnnouncementListContext.Provider>
  );
};

export default HomeAnnouncement;
