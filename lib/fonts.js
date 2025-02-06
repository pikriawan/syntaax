import { Inter, Poppins } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

export const poppins = Poppins({
    weight: ["500"],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap"
});
