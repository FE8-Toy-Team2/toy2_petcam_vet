import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const ListRowStyle = styled.ul`
  position: relative;
  width: 832px;
  display: flex;
  &::after {
    content: "";
    width: calc(100% + 1rem);
    height: 1px;
    background-color: #000;
    position: absolute;
    left: -0.5rem;
    bottom: -24px;
  }  
  & > li:first-child {
    flex-basis: 10rem;
    flex-grow: 0;
  }
  & > li:nth-child(2) {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  & > li:last-child {
    flex-basis: 5rem;
    flex-grow: 0;
    display: flex;
    justify-content: flex-end;
  }
  & li button {
    color: inherit;
    text-decoration: none;
    border: none;
    background-color: inherit;
    font: inherit;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const ListItem = ({ date, title, author, id }) => {
  const navigate = useNavigate();
  const dateObjectFromString = new Date(Number(date));

  return (
    <ListRowStyle>
        <li>
          {dateObjectFromString.getFullYear()}년 {dateObjectFromString.getMonth()+1}월 {dateObjectFromString.getDate()}일
        </li>
        <li>
          <button onClick={() => { navigate(`/announcement/${id}`)} }>
            {title}
          </button>
        </li>
        <li>
          {author}
        </li>
    </ListRowStyle>
  );
};

ListItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ListItem;
