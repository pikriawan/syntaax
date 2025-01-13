import DesktopNavbar from "@/components/desktop-navbar";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import MobileNavbar from "@/components/mobile-navbar";

export default function DashboardLayout({ children }) {
    return (
        <div className="w-full h-full">
            <div className="w-full h-14 px-4 flex justify-between items-center shadow-[0_-0.0625rem_#27272A_inset]">
                <div className="flex items-center gap-4">
                    <MobileNavbar />
                    <div className="flex items-center gap-2">
                        <SyntaaxIcon />
                        <p className="font-brand font-bold">syntaax</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[calc(100%-3.5rem)] flex">
                <DesktopNavbar />
                <main className="w-[calc(100%-15rem)] h-full overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
