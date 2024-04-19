import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import ListHeader from "./ListHeader";
import PostControl from "./PostControl";

const PostSection = styled.section`
  
`;

const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostContent = styled.div`
  /* height: 16rem; */
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid var(--color-black);
  border-radius: 10px;
  overflow: scroll;
`;

const Post = () => {
  const { id } = useParams();
  const [announcements] = useContext(AnnouncementListContext);
  console.log(announcements);
  const announcement = announcements[id-1];
  console.log(announcement);
  const content = JSON.parse(announcement.content);
  console.log(content);
  const dateObjectFromString = new Date(Number(announcement.date));
  console.log(typeof content.date);
  console.log(dateObjectFromString);
  const formattedDateString = `${dateObjectFromString.getFullYear()}년 ${dateObjectFromString.getMonth()+1}월 ${dateObjectFromString.getDate()}일`;
  console.log(content);

  return (
    <PostSection>
      {announcement 
        ? <>
          <PostWrapper>
          <ListHeader date={formattedDateString} title={announcement.title} width="calc(100% - 2rem)"/>
            {typeof content === "string"
              ? <PostContent dangerouslySetInnerHTML={{__html: content}}></PostContent>
              : ""}
          </PostWrapper>
          <PostControl id={parseInt(id, 10)} dbId={announcement.id} />
        </>
        : ""}
    </PostSection>
  );
};

export default Post;
