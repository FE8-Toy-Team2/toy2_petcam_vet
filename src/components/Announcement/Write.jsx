import { useState } from "react";
import styled from "styled-components";
import WriteEditor from "./WriteEditor";
import WriteControl from "./WriteControl";

const WriteTitle = styled.h2`
  font-size: 4rem;
  padding: 48px 0;
`;

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState({});

  return (
    <>
      <WriteTitle>새 글 쓰기</WriteTitle>
      <WriteEditor setTitle={setTitle} setContent={setContent} />
      <WriteControl title={title} content={content} />
    </>
  );
};

export default Write;
