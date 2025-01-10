import clsx from "clsx";
import styles from "@/styles/Input.module.css";

export default function Input({
    id,
    label,
    className,
    ...props
}) {
    return (
        <div className={styles["input-field"]}>
            {label && (
                <label className={styles.label} htmlFor={id}>{label}</label>
            )}
            <input
                className={clsx(styles.input, className)}
                id={id}
                {...props}
            />
        </div>
    );
}
