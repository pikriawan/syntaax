import Image from "next/image";
import syntaax from "@/public/syntaax.svg";
import Appbar from "@/components/Appbar";
import DesktopNavbar from "@/components/DesktopNavbar";
import Link from "@/components/Link";
import MobileNavbar from "@/components/MobileNavbar";
import styles from "@/styles/DashboardLayout.module.css";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Appbar className={styles.appbar}>
                <MobileNavbar />
                <Link href="/" className={styles["brand-link"]}>
                    <Image width={16} height={16} src={syntaax} alt="Syntaax" />
                    <span className={styles["brand-text"]}>syntaax</span>
                </Link>
            </Appbar>
            <div className={styles["content"]}>
                <DesktopNavbar />
                <main className={styles["main-content"]}>
                    {children}
                </main>
            </div>
        </>
    );
}
