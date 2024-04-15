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
  & li a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ListItem = ({ date, title, author }) => {
  return (
    <ListRowStyle>
        <li>
          {date}
        </li>
        <li>
          <a href="#">
            {title}
          </a>
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
  author: PropTypes.string.isRequired
}

export default ListItem;
