import { auth } from "./lib/auth";

const publicRoutes = ["/", "/signin"];

export default auth(async function middleware(req) {
    if (!req.auth && !publicRoutes.includes(req.nextUrl.pathname)) {
        return Response.redirect(new URL("/signin", req.nextUrl.origin));
    }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
