import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import { AnnouncementListContext, announcementQuery, snapshotToArray } from "../../context/AnnouncementListContext";
import styled from "styled-components";

const HomeAnnouncementWrapper = styled.section`
  p {
    margin-bottom: 1rem;
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

const Announcement = () => {
  const newAnnouncementContext = useContext(AnnouncementListContext);
  const [announcements, setAnnouncements] = useState(newAnnouncementContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(announcementQuery);
      const newAnnouncementListContext = snapshotToArray(querySnapshot);
      const filteredAnnouncementList = newAnnouncementListContext.filter(announcement => Number(announcement.date) > new Date().valueOf() - 1000 * 60 * 60 * 24);
      setAnnouncements(filteredAnnouncementList);
    }
    fetchData();
  });

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

export default Announcement;
