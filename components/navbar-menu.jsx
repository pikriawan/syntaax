import { Box, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function NavbarMenu({ onNavigate }) {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof onNavigate === "function") {
            onNavigate();
        }
    }, [pathname, onNavigate]);

    return (
        <ul className="flex flex-col gap-3 p-4">
            <li>
                <Link href="/playgrounds" className={cn("flex items-center gap-2 p-2 rounded-lg transition-colors", pathname === "/playgrounds" ? "bg-zinc-50 text-zinc-950 hover:bg-zinc-300" : "hover:bg-zinc-800")}>
                    <Box size={20} />
                    Playgrounds
                </Link>
            </li>
            <li>
                <Link href="/profile" className={cn("flex items-center gap-2 p-2 rounded-lg transition-colors", pathname === "/profile" ? "bg-zinc-50 text-zinc-950 hover:bg-zinc-300" : "hover:bg-zinc-800")}>
                    <UserRound size={20} />
                    Profile
                </Link>
            </li>
        </ul>
    );
}
