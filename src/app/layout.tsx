import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";
import "@/styles/globals.css";

const SFPro = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "../../public/assets/fonts/SF-Pro-Display-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SF-Pro-Display-Ultralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SF-Pro-Display-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SF-Pro-Display-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SF-Pro-Display-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SF-Pro-Display-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SF-Pro-Display-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/../../public/assets/fonts/SF-Pro-Display-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SF-Pro-Display-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
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
      className={SFPro.className}
      translate="no"
    >
      <body
        className={cn(
          "bg-custom-white-900 relative mx-auto max-w-7xl overflow-x-hidden text-mood-gray antialiased",
        )}
      >
        <a
          href="#main-content"
          className="z-50 -top-40 transition-all duration-[250ms] ease-in-out absolute focus:top-0 p-2 m-3 bg-mood-gray text-custom-white-900"
        >
          Skip To Content
        </a>
        <Header />
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
