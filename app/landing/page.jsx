import Link from "next/link";
import SyntaaxIcon from "@/components/icons/syntaax-icon";

export default async function LandingPage() {
    return (
        <div className="w-full h-full">
            <div className="w-full h-14 flex justify-between items-center px-4 fixed top-0 left-0">
                <Link href="/">
                    <SyntaaxIcon />
                </Link>
                <Link href="/signin">
                    <span>Sign in</span>
                </Link>
            </div>
            <div className="w-full h-full flex justify-center items-center overflow-hidden">
                <p className="font-brand text-[2.5rem] md:text-[10rem]">syntaax</p>
            </div>
        </div>
    );
}
