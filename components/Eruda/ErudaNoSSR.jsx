"use client";

import dynamic from "next/dynamic";

const ErudaNoSSR = dynamic(() => import("./_Eruda"), { ssr: false });

export default ErudaNoSSR;
