import { useEffect } from "react";
import { useEditor, EditorContent } from '@tiptap/react'
import styled from "styled-components";
import PropTypes from "prop-types";
import StarterKit from '@tiptap/starter-kit'

const WriteEditorForm = styled.form`
  & .tiptap {
    height: 16rem;
    padding: 1rem;
    border: 1px solid var(--color-black);
    border-radius: 10px;
    overflow: scroll;
  }
`;

const WriteEditorTitleInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-black);
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  font-size: 16px;
`;


const WriteEditor = ({ title, setTitle, setContent, contentWritten }) => {
  const extensions = [
    StarterKit,
  ]
  const editor = useEditor({
    extensions,
    content: "",
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });
  useEffect(() => {
    if (contentWritten && editor) {
      editor.commands.setContent(JSON.parse(contentWritten));
    }
  }, [contentWritten, editor]);

  return (
    <WriteEditorForm>
      <WriteEditorTitleInput 
        type="text" 
        placeholder="여기에 제목을 입력해 주세요." 
        value={title} 
        onChange={event => { setTitle(event.target.value); }}
      />
      <EditorContent editor={editor} />
    </WriteEditorForm>
  );
};

WriteEditor.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  contentWritten: PropTypes.string.isRequired,
};

export default WriteEditor;