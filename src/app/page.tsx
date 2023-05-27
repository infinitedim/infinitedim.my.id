import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Heading, Paragraph } from "@/components";
import { cn } from "@/utils";
import Sapiens from "@/public/assets/svg/hero.svg";
import "@total-typescript/ts-reset";

/**
 * @description This is the main metadata in this pages
 * @type {Metadata} The type of metadata
 */
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
    "resume",
    "resume infinitedim",
    "infinitedim",
    "infinitedim portfolio",
    "portfolio infinitedim",
    "Dimas portfolio",
    "junior frontend",
    "i am dimas saputra",
    "saputradimas",
  ],
  authors: [{ name: "infinitedim", url: "https://infinitedim.vercel.app" }],
  creator: "infinitedim",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Page() {
  return (
    <section
      id="hero-section"
      className={cn("container mx-auto mb-5 mt-10 max-w-5xl md:mb-10 lg:mt-20")}
    >
      <div
        className={cn(
          "mb-5 flex items-center justify-center md:mb-20 md:px-10 lg:mt-20",
        )}
      >
        <Image
          src={Sapiens}
          className={cn("mt-10 h-2/4 w-2/4 lg:h-3/5 lg:w-3/5")}
          alt="Hero"
          priority
        />
        <Heading className="md:text-5xl md:line-clamp-2 lg:text-6xl text-4xl text-mood-gray font-black">
          What&#8216;s going on here?
        </Heading>
      </div>
      <div className="md:container mt-4 max-w-5xl">
        <Heading
          className="text-4xl lg:text-6xl md:text-5xl text-mood-gray mb-5 font-black"
          title="This is my portfolio"
        >
          This is my portfolio
        </Heading>
        <Paragraph
          className="text-xl md:text-2xl lg:text-3xl sm:line-clamp-4 text-mood-gray font-medium tracking-tighter"
          title="Well hello people, my name is dimas saputra, i am a junior frontend developer especially react. I live in bekasi, indonesia"
        >
          Well hello people, my name is dimas saputra, i am a junior frontend
          developer especially react. I live in bekasi, indonesia
        </Paragraph>
      </div>
      <div
        className={cn(
          "mt-7 flex items-center justify-start gap-x-5 md:container",
        )}
      >
        <Link
          href="/assets/pdf/resume.pdf"
          className="bg-mood-gray text-custom-white-900 hover:bg-custom-black-900 rounded-[10px] px-8 py-4 font-medium transition-all duration-[250ms]"
          title="Resume"
        >
          Resume
        </Link>
        <Link
          href="https://github.com/infinitedim"
          className="border-mood-gray text-mood-gray hover:bg-mood-gray hover:text-custom-white-900 rounded-[10px] border-[1px] px-8 py-4 font-medium transition-all duration-[250ms]"
          title="Github"
        >
          Github
        </Link>
      </div>
    </section>
  );
}
