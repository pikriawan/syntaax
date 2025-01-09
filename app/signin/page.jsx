import Flex from "@/components/Flex";
import GoogleSigninForm from "@/components/GoogleSigninForm";

export default function SigninPage() {
    return (
        <Flex $height="100%" $justify="center" $align="center">
            <GoogleSigninForm />
        </Flex>
    );
}
