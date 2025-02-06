import Link from "next/link";
import CreatePlaygroundForm from "@/components/create-playground-form";
import DesktopNavbar from "@/components/desktop-navbar";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import MobileNavbar from "@/components/mobile-navbar";

export default function DashboardLayout({ children }) {
    return (
        <div className="w-full h-full">
            <div className="w-full h-14 px-4 flex justify-between items-center shadow-[0_-0.0625rem_#27272A_inset]">
                <div className="flex items-center gap-4">
                    <MobileNavbar />
                    <Link href="/" className="flex items-center gap-2">
                        <SyntaaxIcon width={12} height={12} />
                        <p className="font-['Poppins'] font-medium">syntaax</p>
                    </Link>
                </div>
                <CreatePlaygroundForm />
            </div>
            <div className="w-full h-[calc(100%-3.5rem)] flex">
                <DesktopNavbar />
                <main className="w-full h-full overflow-y-auto md:w-[calc(100%-15rem)]">
                    {children}
                </main>
            </div>
        </div>
    );
}
