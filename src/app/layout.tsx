import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components";
import { cn } from "@/utils";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import "@total-typescript/ts-reset";

const inter: NextFont = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * @param {ReactNode} children - The node to render the component on.
 * @returns {JSX.Element} the root node of the tree structure of the application
 * @type {JSX.Element}
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={inter.className}
      translate="no"
    >
      <body
        className={cn(
          "bg-custom-white-900 text-mood-gray relative mx-auto max-w-7xl overflow-x-hidden antialiased",
        )}
      >
        <a
          href="#main-content"
          aria-hidden="true"
          className="z-50 -top-40 transition-all duration-[250ms] ease-in-out absolute focus:top-0 p-2 m-3 bg-primary text-secondary"
        >
          Skip To Content
        </a>
        <Navbar />
        <main
          className="antialiased focus:outline-none mt-10"
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
