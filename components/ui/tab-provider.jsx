"use client";

import { useState } from "react";
import TabContext from "@/contexts/tab-context";

export default function TabProvider({ children, defaultOpenIndex = 0 }) {
    const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

    return (
        <TabContext.Provider value={{ openIndex, setOpenIndex }}>
            {children}
        </TabContext.Provider>
    );
}
