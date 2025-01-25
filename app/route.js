import { redirect } from "next/navigation";
import { getUser } from "@/data/user";

export async function GET() {
    const user = await getUser();

    if (user) {
        redirect("/playgrounds");
    } else {
        redirect("/landing");
    }
}
