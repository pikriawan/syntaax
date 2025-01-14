import { redirect } from "next/navigation";
import { getUser } from "@/data/user";

export default async function LandingPage() {
    const user = await getUser();

    if (user) {
        redirect("/projects");
    }
}
