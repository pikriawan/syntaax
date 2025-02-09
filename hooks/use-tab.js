"use client";

import { useContext } from "react";
import TabContext from "@/contexts/tab-context";

export default function useTab() {
    const tab = useContext(TabContext);
    return tab;
}
