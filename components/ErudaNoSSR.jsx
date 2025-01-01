"use client";

import dynamic from "next/dynamic";

const ErudaNoSSR = dynamic(() => import("./Eruda"), { ssr: false });

export default ErudaNoSSR;
