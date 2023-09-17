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
        <Header />
        <main>{children}</main>
      </body>
      <Analytics />
    </html>
  );
}
