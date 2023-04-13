import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@/styles/globals.css";
import "@total-typescript/ts-reset";
import Navbar from "@/components/Navbar";
import { cn } from "@/utils";

/**
 * @type {import("next").NextFont}
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

/**
 * @param {ReactNode} node - The node to render the component on.
 * @returns {JSX.Element} the root node of the tree structure of the application
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={inter.className}
      translate="yes"
    >
      <body className={cn("max-w-7xl text-mood-gray")}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
