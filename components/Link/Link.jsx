import styles from "./styles.module.css";

import clsx from "clsx";
import NextLink from "next/link";

export default function Link({ children, className, ...props }) {
    return <NextLink className={clsx(styles.link, className)} {...props}>{children}</NextLink>
}
