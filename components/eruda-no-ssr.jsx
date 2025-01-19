"use client";

import dynamic from "next/dynamic";

const ErudaNoSSR = dynamic(() => import("./eruda"), { ssr: false });

export default ErudaNoSSR;
