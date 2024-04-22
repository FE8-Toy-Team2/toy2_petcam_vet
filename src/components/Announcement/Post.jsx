import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import ListHeader from "./ListHeader";
import PostControl from "./PostControl";

const PostSection = styled.section`
  align-self: center;
  width: 100%;
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
  line-height: 1.6;
  border: 1px solid var(--color-black);
  border-radius: 10px;
  overflow: scroll;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Post = () => {
  const { id } = useParams();
  const [announcements] = useContext(AnnouncementListContext);
  const announcement = announcements[id - 1];
  const content = JSON.parse(announcement.content);
  const dateObjectFromString = new Date(Number(announcement.date));
  const formattedDateString = `${dateObjectFromString.getFullYear()}년 ${dateObjectFromString.getMonth() + 1}월 ${dateObjectFromString.getDate()}일`;

  return (
    <PostSection>
      {announcement
        ? <>
          <PostWrapper>
            <ListHeader date={formattedDateString} title={announcement.title} width="calc(100% - 2rem)" />
            {typeof content === "string"
              ? <PostContent dangerouslySetInnerHTML={{ __html: content }}></PostContent>
              : ""}
          </PostWrapper>
          <PostControl id={parseInt(id, 10)} dbId={announcement.id} />
        </>
        : ""}
    </PostSection>
  );
};

export default Post;
