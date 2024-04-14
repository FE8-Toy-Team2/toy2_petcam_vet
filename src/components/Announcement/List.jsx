import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import ListItem from "./ListItem";

const List = ({ announcements, page }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchParams.get("page")) {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  
  const totalPage = announcements.length;
  const currentList = announcements.slice(5 * (page - 1), 5 * (page - 1) + 5);

  return (
    <table>
      <thead>
        <tr>
          <th scope="row">작성일</th>
          <th scope="row">제목</th>
          <th scope="row">작성자</th>
        </tr>
      </thead>
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
    </table>
  );
};

export default List;