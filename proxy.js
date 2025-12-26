import { auth } from "./lib/auth";

const publicRoutes = [
    "/",
    "/landing",
    "/signin",
    /^\/playground\/[^/]+\/files\/[^/]+$/
];

export default auth(async function middleware(req) {
    const isPublicRoute = publicRoutes.some((route) => {
        if (typeof route === "string") {
            return route === req.nextUrl.pathname;
        }

        return route.test(req.nextUrl.pathname);
    });

    if (!req.auth && !isPublicRoute) {
        return Response.redirect(new URL("/signin", req.nextUrl.origin));
    }
});

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)"
};
