import styles from "./styles.module.css";
import Appbar from "@/components/Appbar";
import Navbar from "@/components/Navbar";

export default function HomePage() {
    return (
        <Appbar className={styles["app-bar"]}>
            <Navbar />
            <main className={styles.main} />
        </Appbar>
    );
}
