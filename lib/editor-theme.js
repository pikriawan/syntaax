import { HighlightStyle, syntaxHighlighting } from "@codemirror/language"
import { EditorView } from "@codemirror/view"
import { tags as t } from "@lezer/highlight"

const theme = EditorView.theme({
    "&": {
        backgroundColor: "#09090B",
        color: "#FAFAFA"
    },
    "&.cm-focused": {
        outline: "none"
    },
    ".cm-gutters": {
        backgroundColor: "#09090B",
        border: "none",
        color: "#FAFAFA",
        fontFamily: "var(--font-geist-mono)",
        fontSize: "0.875rem"
    },
    ".cm-gutter": {
        paddingLeft: "0.75rem",
        paddingRight: "0.375rem"
    },
    ".cm-content": {
        fontFamily: "var(--font-geist-mono)",
        fontSize: "0.875rem"
    }
}, { dark: true });

const highlightStyle = HighlightStyle.define([
    {
        tag: t.comment,
        color: "#A1A1A1"
    },
    {
        tag: t.name,
        color: "#EDEDED"
    },
    {
        tag: [
            t.typeName,
            t.attributeName,
            t.className,
            t.definition(t.propertyName),
            t.function(t.variableName)
        ],
        color: "#BF7AF0"
    },
    {
        tag: [
            t.tagName,
            t.literal,
            t.string
        ],
        color: "#62C073"
    },
    {
        tag: [t.number, t.definition(t.variableName)],
        color: "#52A8FF"
    },
    {
        tag: [t.keyword, t.operator],
        color: "#F75F8F"
    }
]);

const editorTheme = [theme, syntaxHighlighting(highlightStyle)];

export default editorTheme;
