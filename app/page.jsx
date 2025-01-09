import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function HomePage() {
    const session = await auth();

    if (session) {
        redirect("/projects");
        return;
    }

    return <h1>Landing</h1>;
}
