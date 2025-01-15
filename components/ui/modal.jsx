"use client";

import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ModalClose from "./modal-close";
import ModalContext from "@/contexts/modal-context";
import useMounted from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export default function Modal({ children, className }) {
    const mounted = useMounted();
    const { open } = useContext(ModalContext);
    const modalRef = useRef(null);

    useEffect(() => {
        if (open) {
            const input = modalRef.current.querySelector("input:not([type=\"hidden\"])");
            input?.focus();
        }
    }, [open]);

    return mounted && createPortal(
        <>
            <ModalClose className={cn("w-full h-full fixed top-0 left-0 bg-zinc-950 opacity-40 hidden", open && "block")} />
            <div className={cn(
                "w-[calc(100%-2rem)] fixed top-4 left-4 bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg p-4 hidden md:w-80 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
                open && "block",
                className
            )} ref={modalRef}>
                {children}
            </div>
        </>,
        document.body
    );
}
