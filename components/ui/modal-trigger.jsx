"use client";

import { useContext } from "react";
import ModalContext from "@/contexts/modal-context";

export default function ModalTrigger({ children, className }) {
    const { setOpen } = useContext(ModalContext);

    return (
        <div className={className} onClick={() => setOpen(true)}>
            {children}
        </div>
    );
}
