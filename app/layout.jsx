import ErudaNoSSR from "@/components/eruda-no-ssr";
import ToastProvider from "@/components/ui/toast-provider";
import { inter, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
    title: "Syntaax"
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: "#09090B"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} w-full h-full`}>
            <body className="w-full h-full bg-zinc-950 text-zinc-50">
                <ToastProvider>
                    {children}
                </ToastProvider>
                {process.env.NODE_ENV === "development" && <ErudaNoSSR />}
            </body>
        </html>
    );
}
