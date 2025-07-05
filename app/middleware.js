import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/sign-in(.*)",    // ✅ add this
    "/sign-up(.*)",    // ✅ add this
    "/dashboard(.*)",
  ],
};
