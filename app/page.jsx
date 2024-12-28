import { auth } from "@/auth";
import Button from "@/components/Button";
import SigninForm from "@/components/SigninForm";
import SignoutForm from "@/components/SignoutForm/SignoutForm";

export default async function HomePage() {
    const session = await auth();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1rem"
        }}>
            {session?.user ? (
                <>
                    <h1>Hello, {session.user.name}!</h1>
                    <SignoutForm />
                </>
            ) : <SigninForm />}
        </div>
    );
}
