import { ReactNode } from "react";
import { Metadata } from "next";
import "@total-typescript/ts-reset";

/**
 * @description This is the main metadata in this pages
 * @type {Metadata} The type of metadata
 */
export const metadata: Metadata = {
  title: "Dimas Saputra - Contact",
  description: "This is my personal portfolio web pages",
  keywords: [
    "dimas",
    "dimas Saputra",
    "dimas Saputra resume",
    "resume dimas saputra",
    "infinitedim resume",
    "cv",
    "cv dimas saputra",
    "infinitedim cv",
    "cv infinitedim",
    "resume infinitedim",
    "infinitedim",
    "infinitedim portfolio",
    "portfolio infinitedim",
    "Dimas portfolio",
    "devixid",
    "devix",
    "devixid member",
    "devix member",
    "member devix",
    "member devixid",
  ],
  authors: [{ name: "infinitedim", url: "https://infinitedim.vercel.app" }],
  creator: "infinitedim",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="container max-w-5">{children}</div>;
}
