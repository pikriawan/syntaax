"use client";

import { useState } from "react";
import Button from "./ui/button";
import { cn } from "@/lib/utils";

export default function ProjectEditor({ project }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col h-[calc(100%-3.5rem)]">
            <div className="flex p-4 gap-4 shadow-[0_-0.0625rem_#27272A_inset]">
                <Button
                    className="grow"
                    color={activeIndex === 0 ? "primary" : "secondary"}
                    onClick={() => setActiveIndex(0)}
                >
                    HTML
                </Button>
                <Button
                    className="grow"
                    color={activeIndex === 1 ? "primary" : "secondary"}
                    onClick={() => setActiveIndex(1)}
                >
                    CSS
                </Button>
                <Button
                    className="grow"
                    color={activeIndex === 2 ? "primary" : "secondary"}
                    onClick={() => setActiveIndex(2)}
                >
                    JS
                </Button>
            </div>
            <div className={cn("grow overflow-y-auto hidden", activeIndex === 0 && "block")}>
                {/* Codemirror */}
            </div>
            <div className={cn("grow overflow-y-auto hidden", activeIndex === 1 && "block")}>
                {/* Codemirror */}
            </div>
            <div className={cn("grow overflow-y-auto hidden", activeIndex === 2 && "block")}>
                {/* Codemirror */}
            </div>
        </div>
    );
}
