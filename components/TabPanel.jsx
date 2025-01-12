"use client";

import { useContext } from "react";
import TabContext from "@/contexts/TabContext";

export default function TabPanel({ children, index }) {
    const { activeIndex } = useContext(TabContext);

    return (
        <div style={{ display: activeIndex === index ? "block" : "none" }}>
            {children}
        </div>
    );
}
