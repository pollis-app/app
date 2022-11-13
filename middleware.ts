import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withClerkMiddleware((req: NextRequest) => {
  const { userId } = getAuth(req);

  console.log("mid", userId);
  //   if (!userId && req.nextUrl.pathname.startsWith("/dashboard")) {
  //     const signInUrl = new URL("/sign-in", req.url);
  //     signInUrl.searchParams.set("redirect_url", req.url);

  //     return NextResponse.redirect(signInUrl);
  //   }

  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = { matcher: "/((?!.*\\.).*)" };
