import Link from "next/link";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import Button from "@/components/ui/button";
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
            <div className="w-full overflow-y-auto scrollbar relative">
                <div className="w-full flex flex-col items-center px-4 py-24 gap-16 md:px-16">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-5xl font-bold text-center">Instant HTML, CSS, JS Playground</h1>
                        <p className="text-center">Write HTML, CSS, JS instantly on your browser, see instant result</p>
                        <Link href={user ? "/playgrounds" : "/signin"} className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40">
                            Start creating
                        </Link>
                    </div>
                    <div className="w-full p-4 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-2xl bg-transparent flex justify-center items-center">
                        <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg grid grid-rows-[2.5rem_1fr]">
                            <div className="w-full flex justify-between items-center px-4 shadow-[0_-0.0625rem_#27272A_inset]" />
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_0.0625rem_1fr] grid-rows-1">
                                <div className="flex flex-col">
                                    <div className="p-3 shadow-[0_-0.0625rem_#27272A_inset] flex gap-3">
                                        <Button className="w-full hover:bg-zinc-50 text-sm">HTML</Button>
                                        <Button color="secondary" className="w-full hover:bg-zinc-950 text-sm">CSS</Button>
                                        <Button color="secondary" className="w-full hover:bg-zinc-950 text-sm">JS</Button>
                                    </div>
                                    <div className="h-full py-4 grid grid-cols-[auto_auto] overflow-x-auto font-mono text-xs">
                                        <div className="px-4 flex flex-col items-end">
                                            <div className="py-[0.125rem]">1</div>
                                            <div className="py-[0.125rem]">2</div>
                                            <div className="py-[0.125rem]">3</div>
                                            <div className="py-[0.125rem]">4</div>
                                            <div className="py-[0.125rem]">5</div>
                                            <div className="py-[0.125rem]">6</div>
                                            <div className="py-[0.125rem]">7</div>
                                            <div className="py-[0.125rem]">8</div>
                                            <div className="py-[0.125rem]">9</div>
                                            <div className="py-[0.125rem]">10</div>
                                            <div className="py-[0.125rem]">11</div>
                                        </div>
                                        <div className="overflow-x-auto whitespace-nowrap grid grid-cols-[1fr_1rem]">
                                            <div>
                                                <div className="py-[0.125rem]">&lt;!DOCTYPE html&gt;</div>
                                                <div className="py-[0.125rem]">&lt;<span className="text-[#62C073]">html</span>&gt;</div>
                                                <div className="py-[0.125rem]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">head</span>&gt;</div>
                                                <div className="py-[0.125rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">title</span>&gt;My Website&lt;/<span className="text-[#62C073]">title</span>&gt;</div>
                                                <div className="py-[0.125rem]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#62C073]">head</span>&gt;</div>
                                                <div className="py-[0.125rem]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">body</span>&gt;</div>
                                                <div className="py-[0.125rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">h1</span>&gt;Hello, World!&lt;/<span className="text-[#62C073]">h1</span>&gt;</div>
                                                <div className="py-[0.125rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">p</span>&gt;Welcome to my website!&lt;/<span className="text-[#62C073]">p</span>&gt;</div>
                                                <div className="py-[0.125rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">button</span> <span className="text-[#BF7AF0]">onclick</span><span className="text-[#F75F8F]">=</span><span className="text-[#62C073]">&quot;alert(&#39;👋&#39;)&quot;</span>&gt;Click me!&lt;/<span className="text-[#62C073]">button</span>&gt;</div>
                                                <div className="py-[0.125rem]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#62C073]">body</span>&gt;</div>
                                                <div className="py-[0.125rem]">&lt;/<span className="text-[#62C073]">html</span>&gt;</div>
                                            </div>
                                            <div />
                                        </div>
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
