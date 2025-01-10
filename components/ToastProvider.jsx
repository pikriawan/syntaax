"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Toast from "./Toast";
import ToastContext from "@/contexts/ToastContext";

export default function ToastProvider({ children }) {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const timeoutRef = useRef(null);

    function showToast(msg) {
        setMessage(msg);
        setShow(true);
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setMessage("");
            setShow(false);
        }, 3000);
    }

    function hideToast() {
        setMessage("");
        setShow(false);
        clearTimeout(timeoutRef.current);
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {mounted && createPortal(
                show && (
                    <Toast onHide={hideToast}>
                        {message}
                    </Toast>
                ),
                document.body
            )}
        </ToastContext.Provider>
    );
}
