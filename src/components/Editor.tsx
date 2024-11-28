"use client";
import { EditorState, Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { useEffect, useRef } from "react";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { placeholder } from "@codemirror/view";
import "../app/globals.css";

interface EditorProps {
  language: string;
  code: string;
}

const Editor = ({ language, code }: EditorProps) => {
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
        doc: code || "start coding here",
        extensions: [
          getLanguageExtension(language),
          EditorView.theme({
            "&": {
              fontSize: "16px",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            },
            ".cm-content": {
              fontSize: "16px",
            },
            ".cm-cursor": {
              borderLeft: "2px solid white",
              animation: "blink-caret 1s step-end infinite",
            },
            ".cm-line": {
              lineHeight: "1.6",
            },
          }),
          placeholder("start coding here"),
        ],
      }),
      parent: editorRef.current!,
    });

    view.focus();

    return () => view.destroy();
  }, [language, code]);

  return <div ref={editorRef} className="editor-view"></div>;
};

export default Editor;
