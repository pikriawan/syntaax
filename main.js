import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { html } from "@codemirror/lang-html";
import { HighlightStyle, indentUnit, syntaxHighlighting } from "@codemirror/language";
import { EditorView, keymap, lineNumbers, scrollPastEnd } from "@codemirror/view";
import { tags as t } from "@lezer/highlight";

const theme = EditorView.theme({
    "&": {
        height: "100%",
        backgroundColor: "#09090B",
        color: "#FAFAFA"
    },
    "&.cm-focused": {
        outline: "none"
    },
    ".cm-scroller": {
        overflow: "auto"
    },
    ".cm-gutters": {
        backgroundColor: "#09090B",
        color: "#FAFAFA",
        borderRight: "none",
        boxShadow: "-0.0625rem 0 #27272A inset"
    },
    ".cm-lineNumbers .cm-gutterElement": {
        paddingLeft: "1rem",
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
    html(),
    indentUnit.of("    "),
    scrollPastEnd(),
    EditorView.lineWrapping,
    syntaxHighlighting(highlightStyle)
];
