"use client";

import { createPortal } from "react-dom";
import useMounted from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export default function Modal({
    children,
    className,
    onClose,
    open,
    ...props
}) {
    const mounted = useMounted();

    return mounted && createPortal(
        <>
            <div className={cn("w-full h-full fixed top-0 left-0 bg-zinc-950 opacity-40 hidden", open && "block")} onClick={onClose} />
            <div
                className={cn(
                    "w-[calc(100%-2rem)] fixed top-4 left-4 bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg p-4 hidden md:w-80 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
                    open && "block",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </>,
        document.body
    );
}
