import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import WriteEditor from "./WriteEditor";
import WriteControl from "./WriteControl";

const WriteWrapper = styled.section`
  align-self: center;
  width: 80%;
`;

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const [announcements] = useContext(AnnouncementListContext);
  useEffect(() => {
    if (id) {
      setTitle(announcements[id-1].title);
    }
  }, [id, announcements]);

  return (
    <WriteWrapper>
      <WriteEditor title={title} setTitle={setTitle} setContent={setContent} contentWritten={id ? announcements[id-1].content : ""} />
      <WriteControl title={title} content={content} announcement={id ? announcements[id-1] : null} />
    </WriteWrapper>
  );
};

export default Write;
