"use client";

import { Bars3Icon, DocumentIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import Appbar from "@/components/Appbar";
import { BaseButton } from "@/components/Button";
import Link from "@/components/Link";

export default function MobileNavbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <BaseButton className={styles["navbar-toggle"]} onClick={() => setShow(true)}>
                <Bars3Icon className={styles.icon} />
            </BaseButton>
            {mounted && createPortal(
                <>
                    <div className={clsx(styles.navbar, show && styles.show)}>
                        <Appbar className={styles["app-bar"]}>
                            <Link href="/" onClick={() => setShow(false)}>
                                <Image
                                    width={16}
                                    height={16}
                                    src="/syntaax.svg"
                                    alt="Syntaax"
                                    className={styles.brand}
                                />
                            </Link>
                            <BaseButton onClick={() => setShow(false)}>
                                <XMarkIcon className={styles.icon} />
                            </BaseButton>
                        </Appbar>
                        <div className={styles["navbar-items"]}>
                            <Link href="/" className={clsx(styles["navbar-item"], pathname === "/" && styles["active"])} onClick={() => setShow(false)}>
                                <DocumentIcon className={styles.icon} />
                                <span className={styles["navbar-text"]}>Projects</span>
                            </Link>
                            <Link href="/profile" className={clsx(styles["navbar-item"], pathname === "/profile" && styles["active"])} onClick={() => setShow(false)}>
                                <UserIcon className={styles.icon} />
                                <span className={styles["navbar-text"]}>Profile</span>
                            </Link>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </>
    );
}
