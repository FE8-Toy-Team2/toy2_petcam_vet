import styled from "styled-components";
import PropTypes from "prop-types";

const ListHeaderWrapper = styled.header`
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

const ListHeader = ({ date = "작성일", title = "제목", author = "작성자"}) => {
  return (
    <ListHeaderWrapper>
      <ListHeaderList>
        <li><h3>{date}</h3></li>
        <li><h3>{title}</h3></li>
        <li><h3>{author}</h3></li>
      </ListHeaderList>
    </ListHeaderWrapper>
  );
};

ListHeader.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default ListHeader;
