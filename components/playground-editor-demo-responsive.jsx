"use client";

import { html } from "@codemirror/lang-html";
import { EditorView, lineNumbers } from "@codemirror/view";
import { useEffect, useRef } from "react";
import editorTheme from "@/lib/editor-theme";

function EditorDemo({ className }) {
    const codeRef = useRef("<!DOCTYPE html>\n" +
        "<html>\n" +
        "    <head>\n" +
        "        <title>My Playground</title>\n" +
        "    </head>\n" +
        "    <body>\n" +
        "        <h1>Hello, World!</h1>\n" +
        "        <p>Welcome to my playground!</p>\n" +
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
                editorTheme,
            ]
        });

        return () => viewRef.current.destroy();
    }, []);

    return <div ref={parentRef} className={className} />;
}

export default function PlaygroundEditorDemoResponsive() {
    return (
        <div className="w-full h-full relative">
            <div className="w-full p-4 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-transparent flex justify-center items-center backdrop-blur-xl">
                <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg bg-zinc-950">
                    <div className="py-2 px-[0.0625rem] w-full h-[20rem] overflow-x-auto">
                        <EditorDemo className="w-full h-full" />
                    </div>
                </div>
            </div>
            <div className="w-72 h-60 p-4 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-transparent flex justify-center items-center backdrop-blur-xl absolute left-0 bottom-0">
                <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg bg-zinc-950 overflow-auto h-full">
                    <div className="py-2 px-[0.0625rem] w-full h-full overflow-auto">
                        <EditorDemo className="w-full h-full" />
                    </div>
                </div>
            </div>
            <div className="w-40 h-60 p-4 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-transparent flex justify-center items-center backdrop-blur-xl absolute right-0 bottom-0">
                <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg bg-zinc-950 overflow-auto h-full">
                    <div className="py-2 px-[0.0625rem] w-full h-full overflow-auto">
                        <EditorDemo className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
