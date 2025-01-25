"use client";

import { useState, useContext } from "react";
import CSSEditor from "./css-editor";
import HTMLEditor from "./html-editor";
import SpinnerIcon from "./icons/spinner-icon";
import JSEditor from "./js-editor";
import Button from "./ui/button";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";
import { cn } from "@/lib/utils";

export default function PlaygroundEditor() {
    const { fetching } = useContext(PlaygroundEditorContext);
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="grid grid-rows-[auto_1fr] grid-cols-1 h-full">
            <div className="p-4 shadow-[0_-0.0625rem_#27272A_inset] w-full flex gap-4">
                <Button
                    className="w-full"
                    color={openIndex === 0 ? "primary" : "secondary"}
                    onClick={() => setOpenIndex(0)}
                >
                    HTML
                </Button>
                <Button
                    className="w-full"
                    color={openIndex === 1 ? "primary" : "secondary"}
                    onClick={() => setOpenIndex(1)}
                >
                    CSS
                </Button>
                <Button
                    className="w-full"
                    color={openIndex === 2 ? "primary" : "secondary"}
                    onClick={() => setOpenIndex(2)}
                >
                    JS
                </Button>
            </div>
            <div className="w-full overflow-y-auto">
                {fetching ? (
                    <div className="w-full h-full bg-zinc-950 flex justify-center items-center">
                        <SpinnerIcon className="animate-spin" />
                    </div>
                ) : (
                    <>
                        <HTMLEditor className={cn("w-full h-full", openIndex !== 0 && "hidden")} />
                        <CSSEditor className={cn("w-full h-full", openIndex !== 1 && "hidden")} />
                        <JSEditor className={cn("w-full h-full", openIndex !== 2 && "hidden")} />
                    </>
                )}
            </div>
        </div>
    );
}
