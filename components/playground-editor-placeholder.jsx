"use client";

import { html } from "@codemirror/lang-html";
import { EditorView, lineNumbers } from "@codemirror/view";
import Image from "next/image";
import { useEffect, useRef } from "react";
import editorTheme from "@/lib/editor-theme";
import chrome from "@/public/chrome.svg";
import firefox from "@/public/firefox.svg";
import safari from "@/public/safari.svg";

function EditorDemo() {
    const codeRef = useRef("<!DOCTYPE html>\n" +
        "<html>\n" +
        "    <head>\n" +
        "        <title>My Playground</title>\n" +
        "        <link rel=\"stylesheet\" href=\"style.css\">\n" +
        "    </head>\n" +
        "    <body>\n" +
        "        <h1>Hello, World!</h1>\n" +
        "        <p>Welcome to my playground!</p>\n" +
        "        <script src=\"script.js\"></script>\n" +
        "    </body>\n" +
        "</html>");
    const parentRef = useRef(null);
    const viewRef = useRef(null);

    useEffect(() => {
        viewRef.current = new EditorView({
            doc: codeRef.current,
            parent: parentRef.current,
            extensions: [
                lineNumbers(),
                html(),
                EditorView.editable.of(false),
                EditorView.theme({
                    "&": {
                        background: "transparent"
                    },
                    ".cm-gutters": {
                        background: "transparent"
                    }
                }),
                editorTheme,
            ]
        });

        return () => viewRef.current.destroy();
    }, []);

    return <div ref={parentRef} className="w-full h-full" />;
}

export default function PlaygroundEditorPlaceholder() {
    return (
        <div className="w-full p-4 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-transparent flex justify-center items-center backdrop-blur-xl max-w-[40rem] relative">
            <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg bg-zinc-950">
                <div className="py-2 pe-4 w-full h-[20rem] overflow-x-auto">
                    <EditorDemo />
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex gap-4 md:gap-24">
                <div className="w-16 h-16 md:w-24 md:h-24 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-zinc-950 flex justify-center items-center">
                    <Image className="w-10 md:w-16" src={chrome} alt="Chrome" />
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-zinc-950 flex justify-center items-center">
                    <Image className="w-10 md:w-16" src={firefox} alt="Firefox" />
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-zinc-950 flex justify-center items-center">
                    <Image className="w-10 md:w-16" src={safari} alt="Safari" />
                </div>
            </div>
        </div>
    );
}
