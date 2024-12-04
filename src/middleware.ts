import { auth } from "@/auth";

export default auth((req) => {
  const isLoginPage = req.nextUrl.pathname === "/login";
  const isAuthenticated = !!req.auth;

  if (!isAuthenticated && !isLoginPage) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(loginUrl);
  }

  if (isAuthenticated && isLoginPage) {
    const homeUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(homeUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
