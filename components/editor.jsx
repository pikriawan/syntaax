"use client";

import { useEffect, useRef } from "react";
import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { defaultKeymap } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import { EditorView, lineNumbers, keymap } from "@codemirror/view";
import editorTheme from "@/lib/editor-theme";
import { cn } from "@/lib/utils";

export default function Editor({
    className,
    extensions = [],
    defaultValue = "",
    onChange
}) {
    const parentRef = useRef(null);

    useEffect(() => {
        const view = new EditorView({
            extensions: [
                lineNumbers(),
                closeBrackets(),
                indentUnit.of("    "),
                keymap.of([
                    ...closeBracketsKeymap,
                    ...defaultKeymap
                ]),
                EditorView.lineWrapping,
                EditorView.updateListener.of((viewUpdate) => {
                    if (viewUpdate.docChanged) {
                        typeof onChange === "function" && onChange(viewUpdate.view.state.doc.toString());
                    }
                }),
                editorTheme,
                ...extensions
            ],
            doc: defaultValue,
            parent: parentRef.current,
        });

        return () => view.destroy();
    }, []);

    return <div className={cn("h-full", className)} ref={parentRef}></div>;
}
