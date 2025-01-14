"use client";

import { useState } from "react";
import ModalContext from "@/contexts/modal-context";

export default function ModalProvider({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ open, setOpen }}>
            {children}
        </ModalContext.Provider>
    );
}
