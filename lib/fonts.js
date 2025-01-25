import { Inter, Geist_Mono, Poppins } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

export const geist_mono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap"
});

export const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap"
});
