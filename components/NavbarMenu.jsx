"use client";

import clsx from "clsx";
import { DocumentIcon, UserIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "./Link";
import styles from "@/styles/NavbarMenu.module.css";

export default function NavbarMenu({
    className,
    onNavigate = () => {},
    ...props
}) {
    const pathname = usePathname();

    useEffect(() => {
        onNavigate();
    }, [pathname]);

    return (
        <nav className={clsx(styles["navbar-menu"], className)} {...props}>
            <ul className={styles["navbar-list"]}>
                <li className={clsx(styles["navbar-item"], pathname === "/projects" && styles["navbar-item-active"])}>
                    <Link href="/projects" className={styles["navbar-link"]}>
                        <DocumentIcon width={24} height={24} />
                        Projects
                    </Link>
                </li>
                <li className={clsx(styles["navbar-item"], pathname === "/profile" && styles["navbar-item-active"])}>
                    <Link href="/profile" className={styles["navbar-link"]}>
                        <UserIcon width={24} height={24} />
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
