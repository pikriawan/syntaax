import Image from "next/image";
import syntaax from "@/public/syntaax.svg";
import Appbar from "@/components/Appbar";
import DesktopNavbar from "@/components/DesktopNavbar";
import Link from "@/components/Link";
import MobileNavbar from "@/components/MobileNavbar";
import Stack from "@/components/Stack";
import styles from "@/styles/DashboardLayout.module.css";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Appbar>
                <Stack spacing={1} alignItems="center">
                    <MobileNavbar />
                    <Link href="/">
                        <Stack spacing={0.5} alignItems="center">
                            <Image width={16} height={16} src={syntaax} alt="Syntaax" />
                            <span className={styles["brand-text"]}>syntaax</span>
                        </Stack>
                    </Link>
                </Stack>
            </Appbar>
            <Stack className={styles.content}>
                <DesktopNavbar />
                <main className={styles.main}>{children}</main>
            </Stack>
        </>
    );
}
