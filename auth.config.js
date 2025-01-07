import Google from "next-auth/providers/google";

export default {
    providers: [Google],
    pages: {
        signIn: "/signin",
        signOut: "/signout"
    }
};
