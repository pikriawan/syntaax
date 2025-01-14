"use client";

import { useContext } from "react";
import ModalContext from "@/contexts/modal-context";

export default function ModalClose({ children, className }) {
    const { setOpen } = useContext(ModalContext);

    return (
        <div className={className} onClick={() => setOpen(false)}>
            {children}
        </div>
    );
}
