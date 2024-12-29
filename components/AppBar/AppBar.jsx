import clsx from "clsx";
import styles from "./styles.module.css";

export default function AppBar({ children, className, ...props }) {
    return <div className={clsx(className, styles["app-bar"])}>{children}</div>;
}
