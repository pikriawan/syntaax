import { SiGithub, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { ChevronLeft, Ellipsis, Globe, Play, Smartphone, SquareArrowOutUpRight, Zap } from "lucide-react";
import Link from "next/link";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import Button from "@/components/ui/button";
import { getUser } from "@/data/user";

export default async function LandingPage() {
    const user = await getUser();

    return (
        <div className="w-full h-full overflow-y-auto scrollbar">
            <header className="w-full h-14 flex justify-between items-center px-4 md:px-16">
                <Link href="/" className="flex items-center gap-2">
                    <SyntaaxIcon width={14} height={14} />
                    <span className="font-['Poppins'] font-medium text-lg">syntaax</span>
                </Link>
                {user ? (
                    <Link href="/playgrounds">Dashboard</Link>
                ) : (
                    <Link href="/signin">Sign in</Link>
                )}
            </header>
            <div className="flex flex-col gap-16 px-4 md:px-16 py-16">
                <section className="w-full flex flex-col items-center gap-16">
                    <div className="flex flex-col items-center gap-8">
                        <h1 className="font-bold text-5xl text-center">Instant HTML, CSS, JS playground</h1>
                        <Link href={user ? "/playgrounds" : "/signin"} className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40 text-sm">Start creating</Link>
                    </div>
                    <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] p-3 rounded-[1.25rem]">
                        <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg">
                            <div className="w-full aspect-[9/16] md:aspect-video flex flex-col">
                                <div className="w-full h-14 px-4 flex items-center justify-between gap-4 shadow-[0_-0.0625rem_#27272A_inset]">
                                    <div className="grid grid-cols-[auto_auto] items-center gap-4">
                                        <ChevronLeft size={20} />
                                        <h2 className="font-bold text-2xl truncate">My Playground</h2>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Play size={20} />
                                        <SquareArrowOutUpRight size={20} />
                                        <Ellipsis size={20} />
                                    </div>
                                </div>
                                <div className="w-full h-[calc(100%-3.5rem)] md:grid md:grid-rows-1 md:grid-cols-[1fr_auto_1fr] p-[0_0.0625rem_0.0625rem_0.0625rem]">
                                    <div className="grid grid-rows-[auto_1fr] grid-cols-1 h-full">
                                        <div className="p-4 shadow-[0_-0.0625rem_#27272A_inset] w-full grid grid-cols-[repeat(3,1fr)] gap-4">
                                            <Button className="hover:bg-zinc-50 cursor-auto">HTML</Button>
                                            <Button className="hover:bg-zinc-950 cursor-auto" color="secondary">CSS</Button>
                                            <Button className="hover:bg-zinc-950 cursor-auto" color="secondary">JS</Button>
                                        </div>
                                        <div className="w-full bg-zinc-950 text-[0.8125rem] whitespace-nowrap overflow-hidden rounded-[0_0_0_0.6875rem]">
                                            <div className="flex">
                                                <div className="flex flex-col items-end font-mono px-4 py-1">
                                                    <span className="leading-[1.1375rem]">1</span>
                                                    <span className="leading-[1.1375rem]">2</span>
                                                    <span className="leading-[1.1375rem]">3</span>
                                                    <span className="leading-[1.1375rem]">4</span>
                                                    <span className="leading-[1.1375rem]">5</span>
                                                    <span className="leading-[1.1375rem]">6</span>
                                                    <span className="leading-[1.1375rem]">7</span>
                                                    <span className="leading-[1.1375rem]">8</span>
                                                    <span className="leading-[1.1375rem]">9</span>
                                                    <span className="leading-[1.1375rem]">10</span>
                                                    <span className="leading-[1.1375rem]">11</span>
                                                    <span className="leading-[1.1375rem]">12</span>
                                                    <span className="leading-[1.1375rem]">13</span>
                                                    <span className="leading-[1.1375rem]">14</span>
                                                    <span className="leading-[1.1375rem]">15</span>
                                                </div>
                                                <div className="flex flex-col font-mono pe-4 py-1">
                                                    <span className="leading-[1.1375rem]">&lt;!DOCTYPE html&gt;</span>
                                                    <span className="leading-[1.1375rem]">&lt;<span className="text-[#62C073]">html</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">head</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">meta</span>&nbsp;<span className="text-[#BF7AF0]">charset</span><span className="text-[#F75F8F]">=</span><span className="text-[#62C073]">&quot;UTF-8&quot;</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">meta</span>&nbsp;<span className="text-[#BF7AF0]">name</span><span className="text-[#F75F8F]">=</span><span className="text-[#62C073]">&quot;viewport&quot;</span>&nbsp;<span className="text-[#BF7AF0]">content</span><span className="text-[#F75F8F]">=</span><span className="text-[#62C073]">&quot;width=device-width,&nbsp;initial-scale=1&quot;</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">title</span>&gt;My Playground&lt;/<span className="text-[#62C073]">title</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">link</span>&nbsp;<span className="text-[#BF7AF0]">rel</span><span className="text-[#F75F8F]">=</span><span className="text-[#62C073]">&quot;stylesheet&quot;</span>&nbsp;<span className="text-[#BF7AF0]">href</span><span className="text-[#F75F8F]">=</span><span className="text-[#62C073]">&quot;style.css&quot;</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#62C073]">head</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">body</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">h2</span>&gt;Hello!&lt;/<span className="text-[#62C073]">h2</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">p</span>&gt;Welcome to my playground!&lt;/<span className="text-[#62C073]">p</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">button</span>&gt;Click me!&lt;/<span className="text-[#62C073]">button</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#62C073]">script</span>&nbsp;<span className="text-[#BF7AF0]">src</span><span className="text-[#F75F8F]">=</span><span className="text-[#62C073]">&quot;script.js&quot;</span>&gt;&lt;/<span className="text-[#62C073]">script</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#62C073]">body</span>&gt;</span>
                                                    <span className="leading-[1.1375rem]">&lt;/<span className="text-[#62C073]">html</span>&gt;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[0.0625rem] h-full hidden bg-zinc-800 md:block" />
                                    <div className="h-full hidden bg-zinc-950 md:block rounded-[0_0_0.6875rem_0]">
                                        <div className="p-4">
                                            <h2 className="text-3xl font-bold">Hello!</h2>
                                            <p className="mt-2">Welcome to my playground!</p>
                                            <Button className="mt-4 hover:bg-zinc-50 cursor-auto">Click me!</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full flex flex-col md:grid md:grid-cols-3 gap-8">
                    <div className="shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg px-4 py-8 flex flex-col gap-4">
                        <Globe size={20} />
                        <h2 className="text-xl font-bold">Browser based</h2>
                        <p>Edit HTML, CSS, JS directly in your browser. No installation required.</p>
                    </div>
                    <div className="shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg px-4 py-8 flex flex-col gap-4">
                        <Smartphone size={20} />
                        <h2 className="text-xl font-bold">Mobile friendly</h2>
                        <p>Designed with responsiveness in mind. Ease to use even on mobile.</p>
                    </div>
                    <div className="shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg px-4 py-8 flex flex-col gap-4">
                        <Zap size={20} />
                        <h2 className="text-xl font-bold">Performant</h2>
                        <p>Made with modern technology. Ensuring optimal website performance.</p>
                    </div>
                </section>
                <footer className="w-full flex flex-col items-center gap-8">
                    <div className="flex gap-8">
                        <Link href="https://github.com/pikriawan">
                            <SiGithub size={20} />
                        </Link>
                        <Link href="https://github.com/pikriawan">
                            <SiInstagram size={20} />
                        </Link>
                        <Link href="https://github.com/pikriawan">
                            <SiX size={20} />
                        </Link>
                    </div>
                    <div>&copy; 2025 Syntaax</div>
                </footer>
            </div>
        </div>
    );
}
