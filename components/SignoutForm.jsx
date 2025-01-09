import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Flex from "./Flex";
import SubmitButton from "./SubmitButton";
import { signOut } from "@/auth";

export default function SignoutForm() {
    return (
        <form action={async () => {
            "use server";

            await signOut({ redirectTo: "/" });
        }}>
            <SubmitButton color="danger">
                <Flex as="span" gap="0.5rem" align="center">
                    <ArrowRightStartOnRectangleIcon width={24} height={24} />
                    Sign out
                </Flex>
            </SubmitButton>
        </form>
    );
}
