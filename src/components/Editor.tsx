"use client";
import { EditorState, Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { useEffect, useRef } from "react";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { placeholder } from "@codemirror/view"; // To add placeholder text
import "../app/globals.css";

const Editor = ({ language, code, setCode }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  const getLanguageExtension = (lang: string): Extension => {
    switch (lang) {
      case "python":
        return python();
      case "javascript":
        return javascript();
      case "cpp":
        return cpp();
      default:
        return javascript();
    }
  };

  useEffect(() => {
    const view = new EditorView({
      state: EditorState.create({
        doc: code || "start coding here", // Default code comment
        extensions: [
          getLanguageExtension(language),
          // Enable line wrapping and increase line height for readability
          EditorView.theme({
            "&": {
              fontSize: "16px", // Increase text size
              whiteSpace: "pre-wrap", // Allow line breaks on long lines
              wordWrap: "break-word", // Wrap text at the edge of the editor
            },
            ".cm-content": {
              fontSize: "16px", // Ensure content has increased size
            },
            ".cm-cursor": {
              borderLeft: "2px solid white", // Make the cursor white and larger
              animation: "blink-caret 1s step-end infinite", // Blink the cursor
            },
            ".cm-line": {
              lineHeight: "1.6", // Adjust line height for readability
            },
          }),
          placeholder("start coding here"), // Show placeholder in the editor
        ],
      }),
      parent: editorRef.current!,
    });

    // Ensure the editor is focused when mounted
    view.focus();

    return () => view.destroy();
  }, [language, code]);

  return <div ref={editorRef} className="editor-view"></div>;
};

export default Editor;
