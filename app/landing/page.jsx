import Link from "next/link";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import Button from "@/components/ui/button";

export default async function LandingPage() {
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
            <div className="w-full overflow-y-auto scrollbar relative">
                <div className="w-full flex flex-col items-center px-4 py-24 gap-16 md:px-16">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-5xl font-bold text-center">Instant HTML, CSS, JS Playground</h1>
                        <p className="text-center">Write HTML, CSS, JS instantly on your browser, see instant result</p>
                        <Link href="/" className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40">
                            Start creating
                        </Link>
                    </div>
                    <div className="w-full h-96 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-transparent flex justify-center items-center">
                        <div className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg grid grid-rows-[2.5rem_1fr]">
                            <div className="w-full flex justify-between items-center px-4 shadow-[0_-0.0625rem_#27272A_inset]" />
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_0.0625rem_1fr] grid-rows-1">
                                <div className="flex flex-col">
                                    <div className="p-3 shadow-[0_-0.0625rem_#27272A_inset] flex gap-3">
                                        <Button className="w-full">HTML</Button>
                                        <Button color="secondary" className="w-full">CSS</Button>
                                        <Button color="secondary" className="w-full">JS</Button>
                                    </div>
                                    <div className="h-full">
                                    </div>
                                </div>
                                <div className="bg-zinc-800 hidden md:block" />
                                <div className="h-full hidden md:block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
