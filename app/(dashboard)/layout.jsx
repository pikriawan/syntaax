import styles from "./styles.module.css";
import Appbar from "@/components/Appbar";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Appbar className={styles.appbar}>
            </Appbar>
            {children}
        </>
    );
}
