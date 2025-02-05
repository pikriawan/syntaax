import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import BoxIcon from "./icons/box-icon";
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
                <Link href="/playgrounds" className={cn("flex items-center gap-2 p-2 rounded-lg transition-colors text-sm", pathname === "/playgrounds" ? "bg-zinc-50 text-zinc-950 hover:bg-zinc-300" : "hover:bg-zinc-800")}>
                    <BoxIcon className="w-5 h-5" />
                    Playgrounds
                </Link>
            </li>
            <li>
                <Link href="/profile" className={cn("flex items-center gap-2 p-2 rounded-lg transition-colors text-sm", pathname === "/profile" ? "bg-zinc-50 text-zinc-950 hover:bg-zinc-300" : "hover:bg-zinc-800")}>
                    <UserIcon className="w-5 h-5" />
                    Profile
                </Link>
            </li>
        </ul>
    );
}
