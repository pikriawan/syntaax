import clsx from "clsx";
import styles from "./styles.module.css";

export default function AppBar({ children, className, ...props }) {
    return <div className={clsx(styles["app-bar"], className)}>{children}</div>;
}
