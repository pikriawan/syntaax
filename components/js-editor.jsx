"use client";

import { javascript as jsLang } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import { useContext, useRef, useCallback } from "react";
import Editor from "./editor";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

export default function JSEditor({ className }) {
    const { js, setJs } = useContext(PlaygroundEditorContext);
    const defaultValueRef = useRef(js);

    const onChange = useCallback((value) => {
        setJs(value);
    }, [setJs]);

    return (
        <Editor
            className={className}
            extensions={[
                EditorView.theme({
                    "&": {
                        height: "100%"
                    },
                    ".cm-scroller": {
                        overflow: "auto"
                    }
                }),
                jsLang()
            ]}
            defaultValue={defaultValueRef.current}
            onChange={onChange}
        />
    );
}
