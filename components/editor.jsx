"use client";

import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import { EditorView, lineNumbers, highlightSpecialChars, drawSelection, keymap } from "@codemirror/view";
import { useEffect, useRef } from "react";
import editorTheme from "@/lib/editor-theme";

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
                highlightSpecialChars(),
                history(),
                drawSelection(),
                closeBrackets(),
                indentUnit.of("    "),
                keymap.of([
                    ...closeBracketsKeymap,
                    ...defaultKeymap,
                    ...historyKeymap,
                    indentWithTab
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

    return <div className={className} ref={parentRef} />;
}
