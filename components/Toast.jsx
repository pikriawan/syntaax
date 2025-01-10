"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import BaseButton from "./BaseButton";
import styles from "@/styles/Toast.module.css";

export default function Toast({
    children,
    className,
    onHide,
    ...props
}) {
    return (
        <div className={clsx(styles.toast, className)} {...props}>
            <div className={styles["toast-content"]}>
                {children}
            </div>
            <BaseButton className={styles["icon-button"]} onClick={onHide}>
                <XMarkIcon width={16} height={16} />
            </BaseButton>
        </div>
    );
}
