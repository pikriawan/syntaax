"use client";

import Button from "./button";
import useTab from "@/hooks/use-tab";
import { cn } from "@/lib/utils";

export default function Tab({
    children,
    className,
    index,
    ...props
}) {
    const { openIndex, setOpenIndex } = useTab();

    return (
        <Button
            className={cn("hover:bg-zinc-50", className)}
            color={index === openIndex ? "primary" : "secondary"}
            onClick={() => setOpenIndex(index)}
            {...props}
        >
            {children}
        </Button>
    );
}
