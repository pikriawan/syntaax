"use client";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export default function useMobile() {
    const [mobile, setMobile] = useState(null);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        setMobile(mql.matches);

        function onChange() {
            setMobile(mql.matches);
        }

        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    return mobile;
}
