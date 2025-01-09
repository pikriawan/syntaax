"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Toast from "./Toast";
import ToastContext from "@/contexts/ToastContext";

export default function ToastProvider({ children }) {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [color, setColor] = useState(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ToastContext.Provider
            value={({
                color = null,
                message: msg = ""
            }) => {
                setMessage(msg);
                setColor(color);
                setShow(true);

                clearTimeout(timeoutRef.current);

                timeoutRef.current = setTimeout(() => {
                    setMessage("");
                    setShow(false);
                }, 3000);
            }}
        >
            {children}
            {mounted && createPortal(
                show && (
                    <Toast color={color} onHide={() => {
                        clearTimeout(timeoutRef.current);
                        setMessage("");
                        setShow(false);
                    }}>
                        {message}
                    </Toast>
                ),
                document.body
            )}
        </ToastContext.Provider>
    );
}
