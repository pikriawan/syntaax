import Appbar from "@/components/Appbar";
import BaseButton from "@/components/BaseButton";
import MobileNavbar from "@/components/MobileNavbar";
import styles from "./layout.module.css";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Appbar>
                <MobileNavbar />
            </Appbar>
            <main>{children}</main>
        </>
    );
}
