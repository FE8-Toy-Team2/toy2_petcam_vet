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

export default ListItem;
