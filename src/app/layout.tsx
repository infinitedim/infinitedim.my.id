import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components";
import { inter } from "./fonts";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="z-50 -top-40 transition-all duration-[250ms] ease-in-out absolute focus:top-16 p-2 m-3 bg-woodsmoke-950 text-woodsmoke-50"
        >
          Skip To Content
        </a>
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </main>
      </body>
      <Analytics />
    </html>
  );
}
