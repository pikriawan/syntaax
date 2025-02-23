import Link from "next/link";
import CreatePlaygroundForm from "@/components/create-playground-form";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import PlaygroundList from "@/components/playground-list";
import Profile from "@/components/profile";
import { getUser } from "@/data/user";

export default async function PlaygroundsPage() {
    const user = await getUser();

    return (
        <div className="w-full h-full">
            <div className="w-full h-14 px-4 flex justify-between items-center shadow-[0_-0.0625rem_#27272A_inset]">
                <Link href="/" className="flex items-center gap-2">
                    <SyntaaxIcon width={14} height={14} />
                    <span className="font-['Poppins'] font-medium text-lg">syntaax</span>
                </Link>
                <div className="flex items-center gap-4">
                    <CreatePlaygroundForm />
                    <Profile user={user} />
                </div>
            </div>
            <div className="w-full h-[calc(100%-3.5rem)] flex">
                <main className="w-full h-full overflow-y-auto">
                    <div className="px-4 py-6 flex flex-col items-start gap-4">
                        <h1 className="text-3xl font-bold">Playgrounds</h1>
                        <PlaygroundList />
                    </div>
                </main>
            </div>
        </div>
    );
}
