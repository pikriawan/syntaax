import styles from "./styles.module.css";
import Appbar from "@/components/Appbar";
import MobileNavbar from "@/components/MobileNavbar";

export default function HomePage() {
    return (
        <Appbar className={styles["app-bar"]}>
            <MobileNavbar />
        </Appbar>
    );
}
