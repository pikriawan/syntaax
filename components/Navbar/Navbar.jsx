"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.css";
import { BaseButton } from "@/components/Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BaseButton>
                <Image
                    width={24}
                    height={24}
                    src="/bars-3.svg"
                    alt="Navbar icon"
                    className={styles["navbar-icon"]}
                />
            </BaseButton>
        </>
    );
}
