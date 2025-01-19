"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Toast from "./toast";
import ToastContext from "@/contexts/toast-context";
import useMounted from "@/hooks/use-mounted";

const TOAST_OPEN_DURATION = 3000;

export default function ToastProvider({ children }) {
    const mounted = useMounted();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [hover, setHover] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (hover) {
            if (open) {
                clearTimeout(timeoutRef.current);
            }
        } else {
            timeoutRef.current = setTimeout(() => {
                setOpen(false);
                setMessage("");
            }, TOAST_OPEN_DURATION);
        }
    }, [hover, open]);

    return (
        <ToastContext.Provider value={(msg) => {
            clearTimeout(timeoutRef.current);
            setOpen(true);
            setMessage(msg);
            timeoutRef.current = setTimeout(() => {
                setOpen(false);
                setMessage("");
            }, TOAST_OPEN_DURATION);
        }}>
            {children}
            {mounted && createPortal(
                <Toast
                    open={open}
                    onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClose={() => {
                        clearTimeout(timeoutRef.current);
                        setOpen(false);
                        setMessage("");
                    }}
                >
                    {message}
                </Toast>,
                document.body
            )}
        </ToastContext.Provider>
    );
}
