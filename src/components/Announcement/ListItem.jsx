import styled from "styled-components";
import PropTypes from "prop-types";

const ListRowStyle = styled.tr`
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #000;
    position: absolute;
    left: 0;
    bottom: -24px;
  }  
  & td a {
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
        <td>
          {date}
        </td>
        <td>
          <a href="#">
            {title}
          </a>
        </td>
        <td>
          {author}
        </td>
    </ListRowStyle>
  );
};

ListItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default ListItem;
