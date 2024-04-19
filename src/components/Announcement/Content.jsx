import { useState, useContext, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { AnnouncementListContext, announcementQuery, snapshotToArray } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import List from "./List";
import Pagination from "../common/Pagination";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = () => {
  const [announcements, setAnnouncements] = useContext(AnnouncementListContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    onSnapshot(announcementQuery, (snapshot) => {
      console.log(snapshotToArray(snapshot));
      setAnnouncements(snapshotToArray(snapshot));
    });
  }, [setAnnouncements]);

  return (
    <ContentWrapper>
      <List 
        announcements={announcements} 
        page={page} 
        postBlock={5}
      />
      <Pagination
        currentPage={page} 
        totalPosts={announcements.length} 
        setPage={setPage} 
        postBlock={5}
        pageBlock={5}
      />
    </ContentWrapper>
  );
};

export default Content;
