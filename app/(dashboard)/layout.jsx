import Appbar from "@/components/Appbar";
import BaseButton from "@/components/BaseButton";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import styles from "./layout.module.css";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Appbar>
                <MobileNavbar />
            </Appbar>
            <DesktopNavbar />
            <main>{children}</main>
        </>
    );
}
