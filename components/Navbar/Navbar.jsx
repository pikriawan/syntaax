"use client";

import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import AppBar from "@/components/AppBar";
import { BaseButton } from "@/components/Button";
import Link from "@/components/Link";

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <BaseButton className={styles["icon-button"]} onClick={() => setShow(true)}>
                <Image
                    width={24}
                    height={24}
                    src="/bars-3.svg"
                    alt="Navbar icon"
                />
            </BaseButton>
            {mounted && createPortal(
                <>
                    <div className={clsx(styles.navbar, show && styles.show)}>
                        <AppBar className={styles["app-bar"]}>
                            <Link href="/">
                                <Image
                                    width={16}
                                    height={16}
                                    src="/syntaax.svg"
                                    alt="Syntaax"
                                    className={styles.brand}
                                />
                            </Link>
                            <BaseButton className={styles["icon-button"]} onClick={() => setShow(false)}>
                                <Image
                                    width={24}
                                    height={24}
                                    src="/x-mark.svg"
                                    alt="Navbar icon"
                                />
                            </BaseButton>
                        </AppBar>
                        <div className={styles["navbar-items"]}>
                            <Link href="/" className={clsx(styles["navbar-item"], pathname === "/" && styles["active"])}>
                                <Image
                                    width={24}
                                    height={24}
                                    src="/document.svg"
                                    alt="Projects"
                                />
                                <span className={styles["navbar-text"]}>Projects</span>
                            </Link>
                            <Link href="/profile" className={clsx(styles["navbar-item"], pathname === "/profile" && styles["active"])}>
                                <Image
                                    width={24}
                                    height={24}
                                    src="/user.svg"
                                    alt="Profile"
                                />
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
