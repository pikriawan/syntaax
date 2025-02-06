"use client";

import { css as cssLang } from "@codemirror/lang-css";
import { EditorView } from "@codemirror/view";
import { useContext, useRef, useCallback } from "react";
import Editor from "./editor";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

export default function CSSEditor({ className }) {
    const { css, setCss } = useContext(PlaygroundEditorContext);
    const defaultValueRef = useRef(css);

    const onChange = useCallback((value) => {
        setCss(value);
    }, [setCss]);

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
                cssLang()
            ]}
            defaultValue={defaultValueRef.current}
            onChange={onChange}
        />
    );
}
