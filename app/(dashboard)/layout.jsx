import Link from "next/link";
import CreatePlaygroundForm from "@/components/create-playground-form";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import { getUser } from "@/data/user";
import Profile from "@/components/profile";

export default async function DashboardLayout({ children }) {
    const user = await getUser();

    return (
        <div className="w-full h-full">
            <div className="w-full h-14 px-4 flex justify-between items-center shadow-[0_-0.0625rem_#27272A_inset]">
                <Link href="/" className="flex items-center gap-2">
                    <SyntaaxIcon width={12} height={12} />
                    <p className="font-['Poppins'] font-medium">syntaax</p>
                </Link>
                <div className="flex items-center gap-4">
                    <CreatePlaygroundForm />
                    <Profile user={user} />
                </div>
            </div>
            <div className="w-full h-[calc(100%-3.5rem)] flex">
                <main className="w-full h-full overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
