import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import ErudaNoSSR from "@/components/ErudaNoSSR";
import StyledJsxRegistry from "@/components/StyledJsxRegistry";
import "@/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
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

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto_mono.variable}`}>
            <body>
                <StyledJsxRegistry>
                    {children}
                </StyledJsxRegistry>
                {process.env.NODE_ENV === "development" && <ErudaNoSSR />}
            </body>
        </html>
    );
}
