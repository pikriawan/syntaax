import Link from "next/link";
import { redirect } from "next/navigation";
import Button from "@/components/ui/button";
import { getUser } from "@/data/user";

export default async function LandingPage() {
    const user = await getUser();

    if (user) {
        redirect("/projects");
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <Button>
                <Link href="/signin">Sign in</Link>
            </Button>
        </div>
    );
}
