import { SiGithub, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Globe, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import { getUser } from "@/data/user";
import editor from "@/public/editor.png";

export default async function LandingPage() {
    const user = await getUser();

    return (
        <div className="w-full h-full flex flex-col">
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
            <div className="w-full h-[calc(100%-3.5rem)] grid grid-cols-1 overflow-y-auto scrollbar gap-16 px-4 md:px-16 py-16">
                <section className="w-full flex flex-col items-center gap-16">
                    <div className="flex flex-col items-center gap-8">
                        <h1 className="font-bold text-5xl text-center">Instant HTML, CSS, JS playground</h1>
                        <Link href={user ? "/playgrounds" : "/signin"} className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40 text-sm">Start creating</Link>
                    </div>
                    <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] p-2 md:p-3 rounded-[calc(0.5rem+0.5rem+0.0625rem)] md:rounded-[calc(0.75rem+0.5rem+0.0625rem)]">
                        <div className="w-full shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-[calc(0.5rem+0.0625rem)] p-[0.0625rem]">
                            <Image alt="Editor" className="rounded-lg" src={editor} />
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
                        <Link href="https://github.com/pikriawan" target="_blank">
                            <SiGithub size={20} />
                        </Link>
                        <Link href="https://instagram.com/pikriawan_" target="_blank">
                            <SiInstagram size={20} />
                        </Link>
                        <Link href="https://x.com/pikriawan_" target="_blank">
                            <SiX size={20} />
                        </Link>
                    </div>
                    <div>&copy; 2025 Syntaax</div>
                </footer>
            </div>
        </div>
    );
}
