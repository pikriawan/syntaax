"use client";

import { indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import { EditorView, keymap, scrollPastEnd } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { useEffect, useRef } from "react";
import editorTheme from "@/lib/editor-theme";

export default function Editor({
    className,
    onChange,
    defaultValue = "",
    extensions = []
}) {
    const parentRef = useRef(null);
    const extensionsRef = useRef(extensions);

    useEffect(() => {
        const view = new EditorView({
            doc: defaultValue,
            parent: parentRef.current,
            extensions: [
                basicSetup,
                keymap.of([indentWithTab]),
                indentUnit.of("    "),
                scrollPastEnd(),
                EditorView.lineWrapping,
                EditorView.updateListener.of((viewUpdate) => {
                    if (viewUpdate.docChanged && typeof onChange === "function") {
                        onChange(viewUpdate.state.doc.toString());
                    }
                }),
                editorTheme, 
                ...extensionsRef.current
            ]
        });

        return () => view.destroy();
    }, [onChange, defaultValue]);

    return <div ref={parentRef} className={className} />;
}
