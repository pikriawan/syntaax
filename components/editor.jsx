"use client";

import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { HighlightStyle, indentUnit, syntaxHighlighting } from "@codemirror/language";
import { EditorView, keymap, lineNumbers, scrollPastEnd } from "@codemirror/view";
import { tags as t } from "@lezer/highlight";
import { useEffect, useRef } from "react";

const theme = EditorView.theme({
    "&": {
        backgroundColor: "#09090B",
        color: "#FAFAFA"
    },
    "&.cm-focused": {
        outline: "none"
    },
    ".cm-scroller": {
        overflow: "auto",
        scrollbarColor: "#27272A #09090B"
    },
    ".cm-gutters": {
        backgroundColor: "#09090B",
        color: "#FAFAFA",
        borderRight: "none"
    },
    ".cm-lineNumbers .cm-gutterElement": {
        paddingLeft: "1rem",
        paddingRight: "1rem"
    },
    ".cm-line": {
        paddingLeft: "0",
        paddingRight: "1rem"
    }
}, { dark: true });

const highlightStyle = HighlightStyle.define([
    { tag: t.comment, color: "#A1A1A1" },
    { tag: t.name, color: "#EDEDED" },
    { tag: [t.typeName, t.attributeName, t.className, t.definition(t.propertyName), t.function(t.variableName)], color: "#BF7AF0" },
    { tag: [t.tagName, t.literal, t.string], color: "#62C073" },
    { tag: [t.number, t.definition(t.variableName)], color: "#52A8FF" },
    { tag: [t.keyword, t.operator], color: "#F75F8F" }
]);

const setup = [
    lineNumbers(),
    history(),
    closeBrackets(),
    keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...historyKeymap,
        indentWithTab
    ]),
    indentUnit.of("    "),
    scrollPastEnd(),
    theme,
    syntaxHighlighting(highlightStyle)
];

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
                setup,
                EditorView.updateListener.of((viewUpdate) => {
                    if (viewUpdate.docChanged && typeof onChange === "function") {
                        onChange(viewUpdate.state.doc.toString());
                    }
                }),
                ...extensionsRef.current
            ]
        });

        return () => view.destroy();
    }, [onChange, defaultValue]);

    return <div ref={parentRef} className={className} />;
}
