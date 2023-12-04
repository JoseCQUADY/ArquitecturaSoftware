
/**
 * Middleware for handling authentication and authorization in Next.js.
 * This middleware is imported from the "next-auth/middleware" module.
 * It provides authentication and authorization functionality for routes
 * that match the specified patterns.
 *
 * @remarks
 * The `config` object specifies the patterns that the middleware should
 * match against. The patterns are defined as an array of strings, where
 * each string represents a route pattern. The middleware will be applied
 * to routes that match any of the specified patterns.
 *
 * @public
 */
import { NextRequest, NextResponse } from 'next/server';

export { default } from "next-auth/middleware"

export const config = { matcher: ["/crud/:path*","/new","/edit/:path*"] }

