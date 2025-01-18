"use client";

import { css as cssLang } from "@codemirror/lang-css";
import { useContext } from "react";
import Editor from "./editor";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function CSSEditor({ className }) {
    const { css, setCss } = useContext(ProjectEditorContext);

    return (
        <Editor
            className={className}
            extensions={[cssLang()]}
            defaultValue={css}
            onChange={setCss}
        />
    );
}
