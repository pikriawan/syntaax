import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { EditorView } from "@codemirror/view";
import { tags as t } from "@lezer/highlight";

const theme = EditorView.theme({
    "&": {
        color: "#C9D1D9",
        backgroundColor: "#09090B"
    },
    ".cm-focused": {
        outline: "none"
    },
    ".cm-scroller": {
        scrollbarColor: "#27272A #09090B"
    },
    ".cm-content": {
        caretColor: "#C9D1D9"
    },
    ".cm-cursor, .cm-dropCursor": {
        borderLeftColor: "#C9D1D9"
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
        backgroundColor: "#003D73"
    },
    ".cm-activeLine": {
        backgroundColor: "#36334280"
    },
    ".cm-selectionMatch": {
        backgroundColor: "#003D73"
    },
    ".cm-gutters": {
        backgroundColor: "#09090B"
    },
    ".cm-activeLineGutter": {
        backgroundColor: "#36334280"
    }
}, { dark: true });

const highlightStyle = HighlightStyle.define([
    { tag: [t.standard(t.tagName), t.tagName], color: "#7EE787" },
    { tag: [t.comment, t.bracket], color: "#8B949E" },
    { tag: [t.className, t.propertyName], color: "#D2A8FF" },
    { tag: [t.variableName, t.attributeName, t.number, t.operator], color: "#79C0FF" },
    { tag: [t.keyword, t.typeName, t.typeOperator, t.typeName], color: "#FF7B72" },
    { tag: [t.string, t.meta, t.regexp], color: "#A5D6FF" },
    { tag: [t.name, t.quote], color: "#7EE787" },
    { tag: [t.heading, t.strong], color: "#D2A8ff", fontWeight: "bold" },
    { tag: [t.emphasis], color: "#D2A8FF", fontStyle: "italic" },
    { tag: [t.deleted], color: "#FFDCD7", backgroundColor: "FFEEF0" },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: "#FFAB70" },
    { tag: t.link, textDecoration: "underline" },
    { tag: t.strikethrough, textDecoration: "line-through" },
    { tag: t.invalid, color: "#F97583" }
]);

const editorTheme = [theme, syntaxHighlighting(highlightStyle)];

export default editorTheme;
