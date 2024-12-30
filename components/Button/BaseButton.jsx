import clsx from "clsx";
import styles from "./styles.module.css";

export default function BaseButton({ children, className, ...props }) {
    return <button className={clsx(styles["base-button"], className)} {...props}>{children}</button>;
}
