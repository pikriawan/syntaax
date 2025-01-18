"use client";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export default function useMobile() {
    const [mobile, setMobile] = useState(null);

    useEffect(() => {
        setMobile(innerWidth < MOBILE_BREAKPOINT);

        function onResize() {
            setMobile(innerWidth < MOBILE_BREAKPOINT);
        }

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return mobile;
}
