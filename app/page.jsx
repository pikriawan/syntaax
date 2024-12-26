import { signIn } from "@/auth";

function SignIn() {
    return (
        <form action={async () => {
            "use server";

            await signIn("google");
        }}>
            <button>Signin with Google</button>
        </form>
    );
}

export default function Page() {
    return <SignIn />
}
