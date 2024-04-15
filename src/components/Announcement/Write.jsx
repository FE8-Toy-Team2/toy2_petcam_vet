import { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteTitle = styled.h2`
  font-size: 4rem;
  padding: 48px 0;
`;

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <WriteTitle>새 글 쓰기</WriteTitle>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
};

export default Write;
