import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import ErudaNoSSR from "@/components/eruda-no-ssr";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap"
});

const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-roboto-mono",
    display: "swap"
});

export const metadata = {
    title: "Syntaax"
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto_mono.variable} w-full h-full`}>
            <body className="w-full h-full bg-zinc-950 text-zinc-50 font-sans">
                {children}
                {process.env.NODE_ENV === "development" && <ErudaNoSSR />}
            </body>
        </html>
    );
}
