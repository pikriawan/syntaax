import clsx from "clsx";
import NavbarMenu from "./NavbarMenu";
import styles from "@/styles/DesktopNavbar.module.css";

export default function DesktopNavbar({ className, ...props }) {
    return <NavbarMenu className={clsx(styles["desktop-navbar"], className)} />;
}
