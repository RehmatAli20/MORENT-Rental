import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); 

  if (!userId && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/sign-up", req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|_static|_vercel|favicon.ico|public|sign-in|sign-up).*)", 
  ],
};  