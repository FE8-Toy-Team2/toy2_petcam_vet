import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";

const Post = () => {
  const { id } = useParams();
  const announcements = useContext(AnnouncementListContext);
  console.log(announcements);
  const announcement = announcements[id-1];
  const content = JSON.parse(announcement.content);
  console.log(content);

  return (
    <>
      <h2>{announcement.title}</h2>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </>
  );
};

export default Post;
