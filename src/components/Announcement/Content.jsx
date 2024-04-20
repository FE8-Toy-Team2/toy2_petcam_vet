import { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchParams.get("page")) {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  const [announcements, setAnnouncements] = useContext(AnnouncementListContext);
  const [page, setPage] = useState(parseInt(searchParams.get("page"), 10));

  useEffect(() => {
    onSnapshot(announcementQuery, (snapshot) => {
      setAnnouncements(snapshotToArray(snapshot));
    });
  }, [setAnnouncements]);

  return (
    <ContentWrapper>
      <List announcements={announcements} page={page} postBlock={5} />
      <Pagination currentPage={page} totalPosts={announcements.length} setPage={setPage} postBlock={5} pageBlock={5} />
    </ContentWrapper>
  );
};

export default Content;
