import Link from "next/link";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import PlaygroundEditorDemo from "@/components/playground-editor-demo";
import { getUser } from "@/data/user";

export default async function LandingPage() {
    const user = await getUser();

    return (
        <div className="w-full h-full grid grid-rows-[3.5rem_1fr]">
            <div className="w-full h-14 flex justify-between items-center px-4 shadow-[0_-0.0625rem_#27272A_inset] md:px-16">
                <Link href="/" className="flex items-center gap-2">
                    <SyntaaxIcon />
                    <p className="font-['Poppins'] font-bold">syntaax</p>
                </Link>
                <Link href="/signin">
                    <span>Sign in</span>
                </Link>
            </div>
            <div className="w-full overflow-y-auto scrollbar">
                <div className="w-full flex flex-col items-center px-4 py-24 gap-16 md:px-16 bg-gradient-to-b from-zinc-950 via-[rgba(250,250,250,0.025)] to-zinc-950">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-5xl font-semibold text-center">Instant HTML, CSS, JS Playground</h1>
                        <p className="text-center">Write HTML, CSS, JS instantly on your browser, see instant result</p>
                        <Link href={user ? "/playgrounds" : "/signin"} className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40">
                            Start creating
                        </Link>
                    </div>
                    <PlaygroundEditorDemo />
                </div>
            </div>
        </div>
    );
}
