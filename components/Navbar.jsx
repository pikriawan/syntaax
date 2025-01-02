"use client";

import clsx from "clsx";
import { DocumentIcon, UserIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "./Link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar({ className, ...props }) {
    const pathname = usePathname();

    return (
        <nav className={clsx(styles.navbar, className)} {...props}>
            <ul className={styles["navbar-nav"]}>
                <li className={clsx(styles["navbar-item"], pathname === "/" && styles.active)}>
                    <Link href="/" className={styles["navbar-link"]}>
                        <DocumentIcon width={24} height={24} />
                        Projects
                    </Link>
                </li>
                <li className={clsx(styles["navbar-item"], pathname === "/profile" && styles.active)}>
                    <Link href="/profile" className={styles["navbar-link"]}>
                        <UserIcon width={24} height={24} />
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
