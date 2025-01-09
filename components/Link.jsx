import clsx from "clsx";
import NextLink from "next/link";
import styles from "@/styles/Link.module.css";

export default function Link({ children, className, ...props }) {
    return (
        <NextLink className={clsx(styles.link, className)} {...props}>
            {children}
        </NextLink>
    );
}
