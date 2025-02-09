"use client";

import useTab from "@/hooks/use-tab";
import { cn } from "@/lib/utils";

export default function TabPanel({
    children,
    className,
    index,
    ...props
}) {
    const { openIndex } = useTab();

    return (
        <div className={cn(index !== openIndex && "hidden", className)} {...props}>
            {children}
        </div>
    );
}
