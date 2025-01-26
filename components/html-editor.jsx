"use client";

import { html as htmlLang } from "@codemirror/lang-html";
import { useContext, useRef, useCallback } from "react";
import Editor from "./editor";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

export default function HTMLEditor({ className }) {
    const { html, setHtml } = useContext(PlaygroundEditorContext);
    const defaultValueRef = useRef(html);

    const onChange = useCallback((value) => {
        setHtml(value);
    }, [setHtml]);

    return (
        <Editor
            className={className}
            extensions={[htmlLang()]}
            defaultValue={defaultValueRef.current}
            onChange={onChange}
        />
    );
}
