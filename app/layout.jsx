import { ErudaNoSSR } from "@/components/Eruda";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                {process.env.NODE_ENV === "development" && <ErudaNoSSR />}
            </body>
        </html>
    );
}
