import { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import PropTypes from "prop-types";
import List from "./List";
import Pagination from "../common/Pagination";

const ContentWrapper = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const Content = ({ filter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchParams.get("page")) {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  const [announcements] = useContext(AnnouncementListContext);
  const [page, setPage] = useState(parseInt(searchParams.get("page"), 10));

  return (
    <ContentWrapper>
      {filter.length 
        ? <List
            announcements={announcements}
            page={1}
            filter={filter}
          />
        : <>
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
        </>}
    </ContentWrapper>
  );
};

Content.propTypes = {
  filter: PropTypes.string
};

export default Content;
