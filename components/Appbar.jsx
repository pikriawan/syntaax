import clsx from "clsx";
import styles from "@/styles/Appbar.module.css";

export default function Appbar({ children, className, ...props }) {
    return <div className={clsx(styles.appbar, className)} {...props}>{children}</div>;
}
