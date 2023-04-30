import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dimas Saputra - About",
  description:
    "Hii, my name is dimas saputra, this is my about page, you can read more about me here",
  keywords: [
    "dimas about",
    "dimas saputra about",
    "about dimas saputra",
    "dimas saputra",
    "infinitedim about",
    "about page",
    "halaman about",
    "cv",
    "about me",
    "cv dimas saputra about",
    "infinitedim cv about",
    "infinitedim about",
  ],
  authors: [{ name: "infinitedim", url: "https://infinitedim.vercel.app" }],
  creator: "infinitedim",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function page() {
  return (
    <div className="container max-w-5xl">
      <h1>About</h1>
    </div>
  );
}
