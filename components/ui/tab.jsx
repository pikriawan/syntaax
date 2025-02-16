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
    const active = index === openIndex;

    return (
        <Button
            className={cn(active ? "hover:bg-zinc-50" : "hover:bg-zinc-900", className)}
            color={active ? "primary" : "secondary"}
            onClick={() => setOpenIndex(index)}
            {...props}
        >
            {children}
        </Button>
    );
}
