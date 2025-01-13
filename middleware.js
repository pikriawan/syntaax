import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

const publicRoutes = ["/", "/signin"];

export default auth(async function middleware(req) {
    if (!req.auth && !publicRoutes.includes(req.nextUrl.pathname)) {
        return Response.redirect(new URL("/signin", req.nextUrl.origin));
    }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
