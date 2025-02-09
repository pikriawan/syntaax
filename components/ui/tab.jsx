"use client";

import Button from "./button";
import useTab from "@/hooks/use-tab";

export default function Tab({ children, index, ...props }) {
    const { openIndex, setOpenIndex } = useTab();

    return (
        <Button
            color={index === openIndex ? "primary" : "secondary"}
            onClick={() => setOpenIndex(index)}
            {...props}
        >
            {children}
        </Button>
    );
}
