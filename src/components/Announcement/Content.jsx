import { useState, useContext } from "react";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import List from "./List";
import Pagination from "../common/Pagination";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = () => {
  const announcements = useContext(AnnouncementListContext);
  const [page, setPage] = useState(1);

  return (
    <ContentWrapper>
      <List announcements={announcements} page={page} />
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
