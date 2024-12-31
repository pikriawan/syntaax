"use client";

import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css";
import Appbar from "@/components/Appbar";
import { BaseButton } from "@/components/Button";
import { BaseLink } from "@/components/Link";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const [navbarShow, setNavbarShow] = useState(false);

    return (
        <>
            <Appbar className={styles.appbar}>
                <BaseButton className={styles["navbar-toggle"]} onClick={() => setNavbarShow(true)}>
                    <Bars3Icon width={24} height={24} stroke="#F6F6F6" className={styles.icon} />
                </BaseButton>
                <BaseLink href="/" className={styles.brand}>
                    <Image
                        width={16}
                        height={16}
                        src="/syntaax.svg"
                        alt="Syntaax"
                    />
                    <span>syntaax</span>
                </BaseLink>
                {pathname === "/" && (
                    <BaseButton className={styles["create-project-form-toggle"]}>
                        <PlusIcon width={24} height={24} stroke="#F6F6F6" className={styles.icon} />
                    </BaseButton>
                )}
            </Appbar>
            <Navbar className={styles.navbar} show={navbarShow} onHide={() => setNavbarShow(false)} />
            <main className={styles.main}>{children}</main>
        </>
    );
}
