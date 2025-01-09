"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Appbar from "./Appbar";
import BaseButton from "./BaseButton";
import Link from "./Link";
import NavbarMenu from "./NavbarMenu";
import syntaax from "@/public/syntaax.svg";
import styles from "@/styles/MobileNavbar.module.css";

export default function MobileNavbar({ className, ...props }) {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setShow(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <BaseButton className={clsx(styles["navbar-toggle"], styles["icon-button"])} onClick={() => setShow(true)}>
                <Bars3Icon width={24} height={24} />
            </BaseButton>
            {mounted && createPortal(
                <div className={clsx(styles["mobile-navbar"], show && styles["mobile-navbar-show"], className)} {...props}>
                    <Appbar>
                        <Link href="/" className={styles["brand-link"]} onClick={() => setShow(false)}>
                            <Image width={16} height={16} src={syntaax} alt="Syntaax" />
                        </Link>
                        <BaseButton className={styles["icon-button"]} onClick={() => setShow(false)}>
                            <XMarkIcon width={24} height={24} />
                        </BaseButton>
                    </Appbar>
                    <NavbarMenu className={styles["navbar-menu"]} onNavigate={() => setShow(false)} />
                </div>,
                document.body
            )}
        </>
    );
}
