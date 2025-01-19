"use client";

import { useState, useContext } from "react";
import CSSEditor from "./css-editor";
import HTMLEditor from "./html-editor";
import SpinnerIcon from "./icons/spinner-icon";
import JSEditor from "./js-editor";
import Button from "./ui/button";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function ProjectEditor() {
    const { fetching } = useContext(ProjectEditorContext);
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
            <div className="w-full overflow-y-auto styled-scrollbar">
                {fetching ? (
                    <div className="w-full h-full bg-zinc-950 flex justify-center items-center">
                        <SpinnerIcon className="animate-spin" />
                    </div>
                ) : (
                    <>
                        <HTMLEditor className={openIndex === 0 ? "block" : "hidden"} />
                        <CSSEditor className={openIndex === 1 ? "block" : "hidden"} />
                        <JSEditor className={openIndex === 2 ? "block" : "hidden"} />
                    </>
                )}
            </div>
        </div>
    );
}
