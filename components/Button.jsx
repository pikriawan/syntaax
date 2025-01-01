import clsx from "clsx";
import Image from "next/image";
import BaseButton from "./BaseButton";
import styles from "@/styles/Button.module.css";

export default function Button({
    children,
    className,
    color,
    loading,
    disabled,
    ...props
}) {
    return (
        <BaseButton
            disabled={disabled || loading}
            className={clsx(
                styles.button,
                styles[`button-${color}`],
                loading && styles.loading,
                className
            )}
            {...props}
        >
            <span className={styles["button-content"]}>
                {children}
            </span>
            <Image
                width={16}
                height={16}
                src="/loader.svg"
                alt="Loader"
                className={styles["button-loader"]}
            />
        </BaseButton>
    );
}
