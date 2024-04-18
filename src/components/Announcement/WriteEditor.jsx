import { $getRoot, $getSelection } from "lexical";
import { useEffect, useState } from "react";

import { $generateHtmlFromNodes } from "@lexical/html";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { LexicalComposerContext, useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const WriteEditorWrapper = styled.section`
  position: relative;
  & > input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-black);
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 1rem;
    font-size: 16px;
  }
  & strong {
    font-weight: var(--font-weight-bold);
  }
  & em {
    font-style: italic;
  }
`;

const WriteEditorForm = styled.form`
  & .tiptap {
    height: 16rem;
    padding: 1rem;
    border: 1px solid var(--color-black);
    border-radius: 10px;
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

const ContentStyle = {
  height: "16rem",
  padding: "1rem",
  border: "1px solid var(--color-black)",
  borderRadius: "10px"
};

const EditorPlaceholder = styled.p`
  position: absolute;
  bottom: 16rem;
  left: 1rem;
  color: #666;
`;

const theme = {
  // Theme styling goes here
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don"t throw them, Lexical will
// try to recover gracefully without losing user data.
const onError = (error) => {
  console.error(error);
};

const MyOnChangePlugin = ({ onChange }) => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    })
  }, [onChange, editor]);
};

const MyDOMExportPlugin = () => {
  const [editor] = useLexicalComposerContext();
  
  return (
    <button onClick={() => {
      console.log($generateHtmlFromNodes(editor, null));
    }}>
      Export
    </button>
  );
}

const WriteEditor = ({ setTitle, setContent }) => {
  const extensions = [
    StarterKit,
  ]
  const editor = useEditor({
    extensions,
    content: "",
    onUpdate({ editor }) {
      setContent(editor.getJSON());
    },
  });
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    // <WriteEditorWrapper>
    //   <input type="text" placeholder="여기에 제목을 입력해 주세요." />
    //   <LexicalComposer initialConfig={initialConfig}>
    //     <RichTextPlugin
    //       contentEditable={<ContentEditable style={ContentStyle} />}
    //       placeholder={<EditorPlaceholder>여기에 내용을 입력해 주세요.</EditorPlaceholder>}
    //       ErrorBoundary={LexicalErrorBoundary}
    //     />
    //     <HistoryPlugin />
    //     <MyOnChangePlugin 
    //       onChange={(editorState) => {
    //         editorState.read(text => {
    //           console.log(text);
    //         })
    //       }}/>
    //     {/* <MyDOMExportPlugin /> */}
    //   </LexicalComposer>
    // </WriteEditorWrapper>
    <WriteEditorForm>
      <WriteEditorTitleInput type="text" placeholder="여기에 제목을 입력해 주세요." onChange={event => { setTitle(event.target.value); }}/>
      <EditorContent editor={editor} />
      {/* <EditorProvider extensions={extensions} style={ContentStyle} onChange={(data) => { setText(data); console.log(text); }}></EditorProvider> */}
    </WriteEditorForm>
  );
};

WriteEditor.propTypes = {
  setTitle: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired
}

export default WriteEditor;
