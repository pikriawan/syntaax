"use client";

import { useState, useContext } from "react";
import CSSEditor from "./css-editor";
import HTMLEditor from "./html-editor";
import JSEditor from "./js-editor";
import Button from "./ui/button";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function ProjectEditor() {
    const { loaded } = useContext(ProjectEditorContext);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col w-full md:w-1/2">
            <div className="flex gap-4 p-4 shadow-[0_-0.0625rem_#27272A_inset]">
                <Button
                    className="w-full"
                    color={activeIndex === 0 ? "primary" : "secondary"}
                    onClick={() => setActiveIndex(0)}
                >
                    HTML
                </Button>
                <Button
                    className="w-full"
                    color={activeIndex === 1 ? "primary" : "secondary"}
                    onClick={() => setActiveIndex(1)}
                >
                    CSS
                </Button>
                <Button
                    className="w-full"
                    color={activeIndex === 2 ? "primary" : "secondary"}
                    onClick={() => setActiveIndex(2)}
                >
                    JS
                </Button>
            </div>
            {loaded ? (
                <div className="grow bg-zinc-900 overflow-y-auto">
                    <HTMLEditor className={activeIndex === 0 ? "block" : "hidden"} />
                    <CSSEditor className={activeIndex === 1 ? "block" : "hidden"} />
                    <JSEditor className={activeIndex === 2 ? "block" : "hidden"} />
                </div>
            ) : (
                <div className="grow bg-zinc-900 animate-pulse" />
            )}
        </div>
    );
}
