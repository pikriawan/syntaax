import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req) {
    if (
        !req.auth &&
        req.nextUrl.pathname !== "/signin" &&
        req.nextUrl.pathname !== "/"
    ) {
        const newUrl = new URL("/signin", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
