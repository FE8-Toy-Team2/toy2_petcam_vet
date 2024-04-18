import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const ListHeader = styled.header`
  width: 832px;
  padding: 16px;
  background-color: var(--color-prime);
  border-radius: 10px;
`;

const ListHeaderList = styled.ul`
  font-weight: 600;
  display: flex;
  & > li:first-child {
    flex-basis: 10rem;
    flex-grow: 0;
  }
  & > li:nth-child(2) {
    flex-grow: 1;
  }
  & > li:last-child {
    flex-basis: 5rem;
    flex-grow: 0;
    display: flex;
    justify-content: flex-end;
  }
`;

const ListItemsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 32px 0 64px;
`;

const List = ({ announcements, page }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchParams.get("page")) {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  
  const currentList = announcements.slice(5 * (page - 1), 5 * (page - 1) + 5);

  return (
    <>
      <ListHeader>
        <ListHeaderList>
          <li><h3>작성일</h3></li>
          <li><h3>제목</h3></li>
          <li><h3>작성자</h3></li>
        </ListHeaderList>
      </ListHeader>
      <ListItemsWrapper>
        {currentList.map((announcement) => 
          <li key={announcement.date}>
            <ListItem
              date={announcement.date}
              title={announcement.title}
              author="작성자"
            />
          </li>
        )}
      </ListItemsWrapper>
    </>
  );
};

List.propTypes = {
  announcements: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired
};

export default List;
