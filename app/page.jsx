import { redirect } from "next/navigation";
import Button from "@/components/Button";
import Link from "@/components/Link";
import { getUser } from "@/user";

export default async function HomePage() {
    const user = await getUser();

    if (user) {
        redirect("/projects");
    }

    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }}>
            <h1>Welcome</h1>
            <Link href="/signin">
                <Button>Start building</Button>
            </Link>
        </div>
    );
}
