import clsx from "clsx";
import styles from "./styles.module.css";

export default function Button({ children, variant = "primary", className, ...props }) {
    return <button className={clsx(
        className,
        styles.button,
        styles[`button-${variant}`]
    )} {...props}>{children}</button>
}
