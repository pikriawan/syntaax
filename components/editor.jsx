"use client";

import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import { EditorView, drawSelection, highlightSpecialChars, keymap, lineNumbers, scrollPastEnd } from "@codemirror/view";
import { useEffect, useCallback, useRef } from "react";
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
                lineNumbers(),
                highlightSpecialChars(),
                history(),
                drawSelection(),
                closeBrackets(),
                keymap.of([
                    ...closeBracketsKeymap,
                    ...defaultKeymap,
                    ...historyKeymap,
                    indentWithTab
                ]),
                indentUnit.of("    "),
                scrollPastEnd(),
                EditorView.lineWrapping,
                EditorView.updateListener.of((viewUpdate) => {
                    if (viewUpdate.docChanged) {
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
