/**
 * Configuration options for authentication in the Next.js API route.
 */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

/**
 * Handler for authentication in the Next.js API route.
 */
export const authHandler = NextAuth(authOptions);

/**
 * Handler for GET requests in the Next.js API route.
 */
export const GET = authHandler;

/**
 * Handler for POST requests in the Next.js API route.
 */
export const POST = authHandler;


