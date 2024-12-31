"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import styles from "./styles.module.css";
import Appbar from "@/components/Appbar";
import { BaseButton } from "@/components/Button";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
    const [navbarShow, setNavbarShow] = useState(false);

    return (
        <>
            <Appbar className={styles.appbar}>
                <BaseButton className={styles["navbar-toggle"]} onClick={() => setNavbarShow(true)}>
                    <Bars3Icon width={24} height={24} stroke="#F6F6F6" className={styles.icon} />
                </BaseButton>
            </Appbar>
            <Navbar className={styles.navbar} show={navbarShow} onHide={() => setNavbarShow(false)} />
            <main className={styles.main}>{children}</main>
        </>
    );
}
