"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/Modal.module.css";

export default function Modal({
    children,
    className,
    open,
    onClose = () => {},
    ...props
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted && open && createPortal(
        <>
            <div className={styles["modal-overlay"]} onClick={onClose} />
            <div className={clsx(styles.modal, className)} {...props}>
                {children}
            </div>
        </>,
        document.body
    );
}
