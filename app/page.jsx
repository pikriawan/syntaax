import styles from "./styles.module.css";
import AppBar from "@/components/AppBar";
import Navbar from "@/components/Navbar";

export default function HomePage() {
    return (
        <AppBar className={styles["app-bar"]}>
            <Navbar />
        </AppBar>
    );
}
