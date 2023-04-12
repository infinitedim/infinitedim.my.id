import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";

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
    <html lang="en" className={inter.className} translate="yes">
      <body className="max-w-7xl">
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
