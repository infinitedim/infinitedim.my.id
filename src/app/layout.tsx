import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components";
import { cn } from "@/utils";
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
          className={cn(
            "absolute -top-40 z-50 m-3 bg-woodsmoke-950 p-2 text-woodsmoke-50 transition-all duration-[250ms] ease-in-out focus:top-16",
          )}
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
