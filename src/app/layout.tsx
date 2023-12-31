

/**
 * Represents the layout component for the application.
 * @param children - The child components to be rendered within the layout.
 * @returns The layout component.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import {Providers} from './Providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UsersCrud",
  description: "Crud Using Nextjs and Sql",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
        
      </body>
    </html>
  );
}
