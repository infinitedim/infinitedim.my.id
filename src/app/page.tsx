import { Heading } from "@/components";
import { Metadata } from "next";
import { oswald } from "./fonts";

export const metadata: Metadata = {
  title: "Dimas Saputra - Home",
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
  ],
  authors: [{ name: "infinitedim", url: "https://infinitedim.vercel.app" }],
  publisher: "vercel",
  creator: "infinitedim",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Home() {
  return (
    <section
      id="homepage"
      className="container mx-auto flex flex-col w-full max-w-6xl items-center h-[60vh] justify-center"
    >
      <Heading
        as="h3"
        className={`${oswald.className} font-light text-5xl text-woodsmoke-950`}
      >
        Hi! My name is
      </Heading>
      <Heading
        as="h1"
        className="font-black text-woodsmoke-950 text-6xl lg:text-9xl"
      >
        Dimas Saputra
      </Heading>
    </section>
  );
}
