import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Write</h1>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
};

export default Write;
