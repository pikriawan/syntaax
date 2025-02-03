import Image from "next/image";
import Link from "next/link";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import PlaygroundEditorDemo from "@/components/playground-editor-demo";
import PlaygroundEditorDemoResponsive from "@/components/playground-editor-demo-responsive";
import PlaygroundEditorPlaceholder from "@/components/playground-editor-placeholder";
import { getUser } from "@/data/user";
import github from "@/public/github.svg";
import instagram from "@/public/instagram.svg";
import neon from "@/public/neon.svg";
import nextjs from "@/public/nextjs.svg";
import twitterX from "@/public/twitter-x.svg";
import upstashRedis from "@/public/upstash-redis.svg";

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
                        <p className="text-center">Write HTML, CSS, JS instantly on your browser, see instant result.</p>
                        <Link href={user ? "/playgrounds" : "/signin"} className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40">
                            Start creating
                        </Link>
                    </div>
                    <PlaygroundEditorDemo />
                </div>
                <div className="w-full h-[0.0625rem] flex justify-center items-center px-4 md:px-16">
                    <div className="w-full h-full bg-zinc-800" />
                </div>
                <div className="w-full flex flex-col items-center px-4 py-24 gap-16 md:px-16 bg-gradient-to-b from-zinc-950 via-[rgba(250,250,250,0.025)] to-zinc-950">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-center font-bold">Browser based</p>
                        <h1 className="text-5xl font-semibold text-center">Code directly on your browser</h1>
                        <div className="flex flex-col items-center">
                            <p className="text-center">Use your favourite browser to open <span className="font-bold font-['Poppins']">syntaax</span>. No need to install it on your machine.</p>
                        </div>
                    </div>
                    <PlaygroundEditorPlaceholder />
                </div>
                <div className="w-full h-[0.0625rem] flex justify-center items-center px-4 md:px-16 hidden md:block">
                    <div className="w-full h-full bg-zinc-800" />
                </div>
                <div className="w-full flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] px-4 md:px-16">
                    <div className="w-full h-[0.0625rem] flex justify-center items-center md:hidden">
                        <div className="w-full h-full bg-zinc-800" />
                    </div>
                    <div className="py-24 flex flex-col gap-16 md:pe-16">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl font-semibold">Responsive</h1>
                            <p>Code using your desktop, tablet, or mobile.</p>
                        </div>
                        <PlaygroundEditorDemoResponsive />
                    </div>
                    <div className="w-[0.0625rem] h-full flex justify-center items-center hidden md:block">
                        <div className="w-full h-full bg-zinc-800" />
                    </div>
                    <div className="w-full h-[0.0625rem] flex justify-center items-center md:hidden">
                        <div className="w-full h-full bg-zinc-800" />
                    </div>
                    <div className="py-24 ps-4 md:ps-16 flex flex-col gap-16">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl font-semibold">Fast</h1>
                            <p>Built using Next.js, Upstash Redis, and Neon PostgreSQL, which is fast and performant.</p>
                        </div>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] translate-x-4 -z-10 relative">
                                <Image src={upstashRedis} width={56} height={56} alt="Upstash" />
                            </div>
                            <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] relative">
                                <Image src={nextjs} width={64} height={64} alt="NextJS" />
                            </div>
                            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] relative -z-10 -translate-x-4">
                                <Image className="w-auto h-auto" src={neon} width={56} height={56} alt="Neon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[0.0625rem] flex justify-center items-center px-4 md:px-16">
                    <div className="w-full h-full bg-zinc-800" />
                </div>
                <div className="px-4 md:px-16 py-24 w-full flex flex-col items-center gap-16 md:flex-row md:justify-between">
                    <h1 className="text-5xl text-center font-semibold">What would you build next?</h1>
                    <Link href={user ? "/playgrounds" : "/signin"} className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40">
                        Start creating
                    </Link>
                </div>
                <div className="w-full h-[0.0625rem] flex justify-center items-center px-4 md:px-16">
                    <div className="w-full h-full bg-zinc-800" />
                </div>
                <div className="py-16 w-full flex flex-col items-center gap-4">
                    <div className="flex gap-4">
                        <Link href="https://github.com/pikriawan/syntaax">
                            <Image src={github} alt="Github" width={16} height={16} />
                        </Link>
                        <Link href="https://instagram.com/pikriawan_">
                            <Image src={instagram} alt="Instagram" width={16} height={16} />
                        </Link>
                        <Link href="https://x.com/pikriawan_">
                            <Image src={twitterX} alt="Twitter X" width={16} height={16} />
                        </Link>
                    </div>
                    <p>&copy; 2025 Syntaax</p>
                </div>
            </div>
        </div>
    );
}
