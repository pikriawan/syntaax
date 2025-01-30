"use client";

import { html } from "@codemirror/lang-html";
import { EditorView, lineNumbers } from "@codemirror/view";
import { ArrowTopRightOnSquareIcon, EllipsisHorizontalIcon, ChevronLeftIcon, PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import SpinnerIcon from "./icons/spinner-icon";
import Button from "./ui/button";
import editorTheme from "@/lib/editor-theme";
import { cn } from "@/lib/utils";

function EditorDemo({ onCodeFinished }) {
    const code = "<!DOCTYPE html>\n" +
        "<html>\n" +
        "    <head>\n" +
        "        <title>My Playground</title>\n" +
        "    </head>\n" +
        "    <body>\n" +
        "        <h1>Hello, World!</h1>\n" +
        "        <p>Welcome to my playground!</p>\n" +
        "    </body>\n" +
        "</html>";
    const parentRef = useRef(null);
    const viewRef = useRef(null);
    const intervalRef = useRef(null);
    const visibleCharsRef = useRef("");

    useEffect(() => {
        viewRef.current = new EditorView({
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

        intervalRef.current = setInterval(() => {
            if (visibleCharsRef.current.length <= code.length) {
                viewRef.current.dispatch({
                    changes: {
                        from: 0,
                        to: viewRef.current.state.doc.toString().length,
                        insert: visibleCharsRef.current
                    }
                });
                visibleCharsRef.current += code[visibleCharsRef.current.length];
            } else {
                clearInterval(intervalRef.current);

                if (typeof onCodeFinished === "function") {
                    onCodeFinished();
                }
            }
        }, 50);

        return () => {
            viewRef.current.destroy();
            clearInterval(intervalRef.current);
        }
    }, []);

    return <div ref={parentRef} className="w-full h-full" />;
}

export default function PlaygroundEditorDemo() {
    const [previewLoading, setPreviewLoading] = useState(false);
    const [previewShow, setPreviewShow] = useState(false);

    return (
        <div className="w-full p-4 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-transparent flex justify-center items-center backdrop-blur-xl">
            <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg bg-zinc-950 relative">
                <div className={cn("w-full h-full grid grid-rows-[auto_1fr] md:visible", (previewLoading || previewShow) && "invisible")}>
                    <div className="w-full h-14 px-4 flex items-center justify-between shadow-[0_-0.0625rem_#27272A_inset]">
                        <div className="flex items-center gap-4">
                            <ChevronLeftIcon className="w-6 h-6" />
                            <h1 className="font-medium text-xl">My Playground</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <PlayIcon className="w-6 h-6" />
                            <ArrowTopRightOnSquareIcon className="w-6 h-6 hidden md:inline" />
                            <EllipsisHorizontalIcon className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="h-[30rem] grid grid-cols-1 md:grid-cols-[1fr_0.0625rem_1fr] grid-rows-1">
                        <div className="grid grid-rows-[auto_1fr]">
                            <div className="p-3 shadow-[0_-0.0625rem_#27272A_inset] flex gap-3">
                                <Button className="w-full hover:bg-zinc-50 text-sm cursor-auto">HTML</Button>
                                <Button color="secondary" className="w-full hover:bg-zinc-950 text-sm cursor-auto">CSS</Button>
                                <Button color="secondary" className="w-full hover:bg-zinc-950 text-sm cursor-auto">JS</Button>
                            </div>
                            <div className="p-[0.0625rem] pe-4 w-full h-full overflow-x-auto">
                                <EditorDemo
                                    onCodeFinished={() => {
                                        setPreviewLoading(true);

                                        setTimeout(() => {
                                            setPreviewLoading(false);
                                            setPreviewShow(true);
                                        }, 3000);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-800 hidden md:block" />
                        <div className="h-full p-4 flex-col gap-2 items-start hidden md:flex relative">
                            {previewLoading ? (
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <div className="w-full h-full flex justify-center items-center">
                                        <SpinnerIcon className="animate-spin" />
                                    </div>
                                </div>
                            ) : previewShow && (
                                <>
                                    <h1 className="text-3xl font-bold">Hello, World!</h1>
                                    <p>Welcome to my playground!</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {(previewLoading || previewShow) && (
                    <div className="h-full w-full md:hidden absolute top-0 left-0">
                        <div className="px-4 shadow-[0_-0.0625rem_#27272A_inset] w-full h-14 flex justify-end items-center gap-4">
                            <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                            <XMarkIcon className="w-6 h-6" />
                        </div>
                        {previewLoading ? (
                            <div className="w-full h-full absolute top-0 left-0">
                                <div className="w-full h-full flex justify-center items-center">
                                    <SpinnerIcon className="animate-spin" />
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 flex-col gap-2 items-start">
                                <h1 className="text-3xl font-bold">Hello, World!</h1>
                                <p>Welcome to my playground!</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
