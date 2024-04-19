import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

const ListItemsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 32px 0 64px;
`;

const List = ({ announcements, page, postBlock }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchParams.get("page")) {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  
  const currentList = announcements.slice(postBlock * (page - 1), postBlock * (page - 1) + postBlock);

  return (
    <>
      <ListHeader width="832px" />
      <ListItemsWrapper>
        {currentList.map((announcement, index) => 
          <li key={announcement.date}>
            <ListItem
              date={announcement.date}
              title={announcement.title}
              author="작성자"
              id={postBlock * (page - 1) + index + 1}
            />
          </li>
        )}
      </ListItemsWrapper>
    </>
  );
};

List.propTypes = {
  announcements: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  postBlock: PropTypes.number.isRequired
};

export default List;
