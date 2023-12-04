/**
 * Provides the session context for the application.
 * @param children - The child components to be wrapped by the session provider.
 * @returns The session provider component.
 */
"use client"
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
