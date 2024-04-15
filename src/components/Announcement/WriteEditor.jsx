import { useState } from "react";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css";

const WriteEditor = () => {
  const [value, setValue] = useState("");

  const handleChange = (code) => {
    console.log(code);
    setValue(code);
  }
  
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <ReactQuill 
      theme="snow" 
      value={value} 
      onChange={handleChange}
      modules={modules}
      formats={formats}>
    </ReactQuill>
  );
};

export default WriteEditor;
