import { Bars3Icon } from "@heroicons/react/24/outline";
import Appbar from "@/components/Appbar";
import BaseButton from "@/components/BaseButton";
import Navbar from "@/components/Navbar";
import Stack from "@/components/Stack";
import styles from "./layout.module.css";

export default function DashboardLayout({ children }) {
    return (
        <Stack direction="column" className={styles["dashboard-layout"]}>
            <Appbar>
                <Stack justifyContent="space-between">
                    <BaseButton className={styles["navbar-toggle"]}>
                        <Bars3Icon width={24} height={24} />
                    </BaseButton>
                </Stack>
            </Appbar>
            <Navbar className={styles.navbar} />
        </Stack>
    );
}
