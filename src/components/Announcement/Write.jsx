import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LogInContext } from "../../context/LogInContext";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import WriteEditor from "./WriteEditor";
import WriteControl from "./WriteControl";

const WriteWrapper = styled.section`
  align-self: center;
  width: 100%;
`;

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoggedIn = useContext(LogInContext);
  const [announcements] = useContext(AnnouncementListContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  });

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
