"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import AppBar from "@/components/AppBar";
import { BaseButton } from "@/components/Button";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            <BaseButton className={styles["icon-button"]}>
                <Image
                    width={24}
                    height={24}
                    src="/bars-3.svg"
                    alt="Navbar icon"
                />
            </BaseButton>
            {createPortal(
                <>
                    <div className={styles.navbar}>
                        <AppBar className={styles["app-bar"]}>
                            <Link href="/">
                                <Image
                                    width={16}
                                    height={16}
                                    src="/syntaax.svg"
                                    alt="Syntaax"
                                />
                            </Link>
                            <BaseButton className={styles["icon-button"]}>
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
