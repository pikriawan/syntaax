import { Inter, Geist_Mono, Poppins } from "next/font/google";
import ErudaNoSSR from "@/components/eruda-no-ssr";
import ToastProvider from "@/components/ui/toast-provider";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const geist_mono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap"
});

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--font-poppins",
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
        <html lang="en" className={`${inter.variable} ${geist_mono.variable} ${poppins.variable} w-full h-full`}>
            <body className="w-full h-full bg-zinc-950 text-zinc-50 font-sans">
                <ToastProvider>
                    {children}
                </ToastProvider>
                {process.env.NODE_ENV === "development" && <ErudaNoSSR />}
            </body>
        </html>
    );
}
