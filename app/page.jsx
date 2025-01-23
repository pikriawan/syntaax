import Link from "next/link";
import { redirect } from "next/navigation";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import { getUser } from "@/data/user";

export default async function LandingPage() {
    const user = await getUser();

    if (user) {
        redirect("/playgrounds");
    }

    return (
        <>
            <div className="w-full h-14 flex justify-between items-center px-4 fixed top-0 left-0">
                <SyntaaxIcon />
                <Link href="/signin">
                    <span>Sign in</span>
                </Link>
            </div>
            <div className="w-full h-full flex justify-center items-center overflow-hidden">
                <p className="font-brand text-[2.5rem] md:text-[10rem]">syntaax</p>
            </div>
        </>
    );
}
