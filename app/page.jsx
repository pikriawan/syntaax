import { auth } from "@/auth";
import Button from "@/components/Button";
import SigninForm from "@/components/SigninForm";
import SignoutForm from "@/components/SignoutForm/SignoutForm";

export default async function HomePage() {
    const session = await auth();

    return session?.user ? (
        <>
            <p>Hello, {session.user.name}!</p>
            <SignoutForm />
        </>
    ) : (
        <>
            <p>Thanks for visiting here! Let's sign in!</p>
            <SigninForm />
        </>
    );
}
