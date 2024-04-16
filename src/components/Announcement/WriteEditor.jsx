import {$getRoot, $getSelection} from "lexical";
import {useEffect} from "react";

import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import styled from "styled-components";

const WriteEditorWrapper = styled.section`
  position: relative;
`;

const ContentStyle = {
  height: "16rem",
  padding: "1rem",
  border: "1px solid var(--color-black)",
  borderRadius: "10px"
};

const EditorPlaceholder = styled.p`
  position: absolute;
  top: 1rem;
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

const WriteEditor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <WriteEditorWrapper>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable style={ContentStyle} />}
          placeholder={<EditorPlaceholder>여기에 내용을 입력해 주세요.</EditorPlaceholder>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
      </LexicalComposer>
    </WriteEditorWrapper>
  );
};

export default WriteEditor;
