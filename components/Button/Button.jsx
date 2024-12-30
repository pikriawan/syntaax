import clsx from "clsx";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Button({
    children,
    className,
    disabled,
    loading,
    variant = "primary",
    ...props
}) {
    return (
        <button
            className={clsx(
                styles.button,
                styles[`button-${variant}`],
                loading && styles.loading,
                className,
            )}
            disabled={disabled || loading}
            {...props}
        >
            <span className={styles["button-children"]}>
                {children}
            </span>
            <Image
                src="loader.svg"
                alt="Loader"
                width={16}
                height={16}
                className={styles["button-loader"]}
            />
        </button>
    );
}
