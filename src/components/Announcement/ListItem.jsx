import PropTypes from "prop-types";

const ListItem = ({ date, title, author }) => {
  return (
    <tr>
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
    </tr>
  );
};

ListItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default ListItem;
