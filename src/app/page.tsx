import { Heading } from "@/components";
import { Metadata } from "next";
import { cn } from "@/utils";
import Hero from "@/public/hero.svg";
import Image from "next/image";
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
  authors: [{ name: "infinitedim", url: "https://infinitedim.site" }],
  publisher: "vercel",
  creator: "infinitedim",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Home() {
  return (
    <section
      id="homepage"
      className={cn(
        "container mx-auto mt-32 flex w-full max-w-6xl flex-col items-center justify-around",
      )}
    >
      <div className="self-center flex flex-col items-center my-10">
        <Heading
          as="h3"
          className={cn(
            `${oswald.className} text-3xl font-light tracking-tighter text-woodsmoke-950 lg:text-5xl`,
          )}
        >
          Hi! My name is
        </Heading>
        <Heading
          as="h1"
          className="font-bold tracking-tighter text-woodsmoke-950 text-5xl lg:text-9xl"
        >
          Dimas Saputra
        </Heading>
      </div>
      <Image
        src={Hero}
        alt="Hero"
        className={cn("h-3/5 w-3/5 sm:h-2/5 sm:w-2/5")}
      />
    </section>
  );
}
