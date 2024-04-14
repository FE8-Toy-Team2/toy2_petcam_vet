import { useState, useContext } from "react";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import List from "./List";
import Pagination from "../common/Pagination";

const Content = () => {
  const announcements = useContext(AnnouncementListContext);
  const [page, setPage] = useState(1);

  return (
    <section>
      <List announcements={announcements} page={page} />
      <Pagination
        currentPage={page} 
        totalPosts={announcements.length} 
        setPage={setPage} 
        postBlock={5}
        pageBlock={5}
      />
    </section>
  );
};

export default Content;
