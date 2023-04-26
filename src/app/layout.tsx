import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

/**
 * @description this is a nextjs optimization init
 * @type {NextFont}
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

/**
 * @param {ReactNode} node - The node to render the component on.
 * @returns {ReactNode} the root node of the tree structure of the application
 * @type {JSX.Element}
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={inter.className}
      translate="yes"
    >
      <body
        className={cn(
          "text-mood-gray mx-auto max-w-7xl overflow-x-hidden bg-white antialiased",
        )}
      >
        <Navbar />
        <main className="antialiased">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
