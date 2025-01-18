"use client";

import { html as htmlLang } from "@codemirror/lang-html";
import { useContext } from "react";
import Editor from "./editor";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function HTMLEditor({ className }) {
    const { html, setHtml } = useContext(ProjectEditorContext);

    return (
        <Editor
            className={className}
            extensions={[htmlLang()]}
            defaultValue={html}
            onChange={setHtml}
        />
    );
}
