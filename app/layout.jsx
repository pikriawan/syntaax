import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ErudaNoSSR } from "@/components/Eruda";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
    variable: "--font-poppins",
    display: "swap"
});

export const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-roboto-mono",
    display: "swap"
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto_mono.variable}`}>
            <body>
                {children}
                {process.env.NODE_ENV === "development" && <ErudaNoSSR />}
            </body>
        </html>
    );
}
