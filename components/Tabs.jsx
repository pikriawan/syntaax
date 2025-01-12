"use client";

import { useState } from "react";
import TabContext from "@/contexts/TabContext";

export default function Tabs({ children, defaultActiveIndex = 0 }) {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

    return (
        <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
        </TabContext.Provider>
    );
}
