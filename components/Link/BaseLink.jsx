import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";

export default function BaseLink({ children, className, ...props }) {
    return <Link className={clsx(styles["base-link"], className)} {...props}>{children}</Link>
}
