"use client";

import { DocumentIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import Appbar from "@/components/Appbar";
import { BaseButton } from "@/components/Button";
import { BaseLink } from "@/components/Link";

export default function Navbar({ className, show, onHide }) {
    const pathname = usePathname();

    return (
        <nav className={clsx(styles.navbar, show && styles.show, className)}>
            <Appbar className={styles.appbar}>
                <BaseLink href="/" onClick={onHide}>
                    <Image
                        width={16}
                        height={16}
                        src="/syntaax.svg"
                        alt="Syntaax"
                        className={styles.brand}
                    />
                </BaseLink>
                <BaseButton onClick={onHide}>
                    <XMarkIcon width={24} height={24} stroke="#F6F6F6" className={styles.icon} />
                </BaseButton>
            </Appbar>
            <div className={styles["navbar-nav"]}>
                <BaseLink href="/" className={clsx(styles["navbar-item"], pathname === "/" && styles.active)} onClick={onHide}>
                    <DocumentIcon width={24} height={24} stroke={pathname === "/" ? "#121212" : "#F6F6F6"} className={styles.icon} />
                    <span className={styles["navbar-item-text"]}>Projects</span>
                </BaseLink>
                <BaseLink href="/profile" className={clsx(styles["navbar-item"], pathname === "/profile" && styles.active)} onClick={onHide}>
                    <UserIcon width={24} height={24} stroke={pathname === "/profile" ? "#121212" : "#F6F6F6"} className={styles.icon} />
                    <span className={styles["navbar-item-text"]}>Profile</span>
                </BaseLink>
            </div>
        </nav>
    );
}
