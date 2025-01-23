"use client";

import { javascript as jsLang } from "@codemirror/lang-javascript";
import { useContext } from "react";
import Editor from "./editor";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

export default function JSEditor({ className }) {
    const { js, setJs } = useContext(PlaygroundEditorContext);

    return (
        <Editor
            className={className}
            extensions={[jsLang()]}
            defaultValue={js}
            onChange={setJs}
        />
    );
}
