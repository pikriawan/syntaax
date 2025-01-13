import { DocumentIcon, UserIcon } from "@heroicons/react/24/outline";
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
    }, [pathname]);

    return (
        <ul className="flex flex-col gap-3 p-4">
            <li>
                <Link href="/projects" className={cn("flex items-center gap-2 p-2 rounded-lg transition-colors", pathname === "/projects" ? "bg-zinc-50 text-zinc-950 hover:bg-zinc-300" : "hover:bg-zinc-800")}>
                    <DocumentIcon className="w-6 h-6" />
                    Projects
                </Link>
            </li>
            <li>
                <Link href="/profile" className={cn("flex items-center gap-2 p-2 rounded-lg transition-colors", pathname === "/profile" ? "bg-zinc-50 text-zinc-950 hover:bg-zinc-300" : "hover:bg-zinc-800")}>
                    <UserIcon className="w-6 h-6" />
                    Profile
                </Link>
            </li>
        </ul>
    );
}
