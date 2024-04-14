import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
// TODO: table에서 grid 사용으로 업데이트

const ListTable = styled.table`
  width: 832px;
  position: relative;
  border-collapse: separate;
  border-spacing: 16px 64px;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 48px;
    background-color: #FFCD29;
    top: 48px;
    left: 0;
    border-radius: 10px;
    z-index: -10;
  }
`;

const ListHeader = styled.thead`
`;

const ListHeaderRow = styled.tr`
  font-weight: 600;
`;

const List = ({ announcements, page }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchParams.get("page")) {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  
  const currentList = announcements.slice(5 * (page - 1), 5 * (page - 1) + 5);

  return (
    <ListTable align="left">
      <ListHeader>
        <ListHeaderRow align="left">
          <th scope="row">작성일</th>
          <th scope="row">제목</th>
          <th scope="row">작성자</th>
        </ListHeaderRow>
      </ListHeader>
      <tbody>
        {currentList.map((announcement, index) => 
          <ListItem
            date={announcement.date}
            title={announcement.title}
            author={announcement.author}
            key={announcement.title + new Date().toString() + index}
          />
        )}
      </tbody>
    </ListTable>
  );
};

List.propTypes = {
  announcements: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired
};

export default List;
