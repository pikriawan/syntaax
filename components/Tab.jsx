"use client";

import { useContext } from "react";
import BaseButton from "./BaseButton";
import TabContext from "@/contexts/TabContext";

export default function Tab({ children, index }) {
    const { setActiveIndex } = useContext(TabContext);

    return (
        <BaseButton onClick={() => setActiveIndex(index)}>
            {children}
        </BaseButton>
    );
}
