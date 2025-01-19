"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import SyntaaxIcon from "./icons/syntaax-icon";
import NavbarMenu from "./navbar-menu";
import useMounted from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export default function MobileNavbar() {
    const mounted = useMounted();
    const [open, setOpen] = useState(false);

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <button className="md:hidden" onClick={() => setOpen(true)}>
                <Bars3Icon className="w-6 h-6" />
            </button>
            {mounted && createPortal(
                <nav className={cn("w-full h-full fixed top-0 bg-zinc-950 transition-[left] md:hidden", open ? "left-0" : "-left-full")}>
                    <div className="w-full h-14 px-4 flex items-center justify-between shadow-[0_-0.0625rem_#27272A_inset]">
                        <Link href="/">
                            <SyntaaxIcon />
                        </Link>
                        <button onClick={() => setOpen(false)}>
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="h-[calc(100%-3.5rem)] overflow-y-auto">
                        <NavbarMenu onNavigate={close} />
                    </div>
                </nav>,
                document.body
            )}
        </>
    );
}
