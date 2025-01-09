import Image from "next/image";
import syntaax from "@/public/syntaax.svg";
import Appbar from "@/components/Appbar";
import DesktopNavbar from "@/components/DesktopNavbar";
import Flex from "@/components/Flex";
import Link from "@/components/Link";
import MobileNavbar from "@/components/MobileNavbar";
import styles from "@/styles/DashboardLayout.module.css";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Appbar>
                <Flex gap="1rem" align="center">
                    <MobileNavbar />
                    <Link href="/">
                        <Flex gap="0.5rem" align="center">
                            <Image width={16} height={16} src={syntaax} alt="Syntaax" />
                            <span className={styles["brand-text"]}>syntaax</span>
                        </Flex>
                    </Link>
                </Flex>
            </Appbar>
            <Flex height="calc(100% - var(--appbar-height))">
                <DesktopNavbar />
                <main className={styles.main}>{children}</main>
            </Flex>
        </>
    );
}
