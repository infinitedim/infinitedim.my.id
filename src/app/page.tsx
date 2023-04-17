import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Heading, Paragraph } from "@/components/atoms";
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
  colorScheme: "light",
  publisher: "vercel",
  openGraph: {
    type: "website",
    url: "https://infinitedim.vercel.app",
    title: "Dimas Saputra - Home",
    description: "My Portfolio website",
    siteName: "My Website",
    images: [
      {
        url: "https://infinitedim.vercel.app/opengraph.png",
      },
    ],
  },
  creator: "infinitedim",
  viewport: { width: "device-width", initialScale: 1 },
};

/**
 * @description this function is create home page components
 * @returns {ReactNode}
 * @type {JSX.Element}
 */
export default function page() {
  return (
    <div className={cn("container mb-10 max-w-5xl")}>
      <div
        className={cn(
          "mb-5 flex items-center justify-center md:mb-20 md:px-10",
        )}
      >
        <Image
          src={Sapiens}
          quality={100}
          className={cn("mt-10 md:h-3/4 md:w-3/4")}
          alt="Hero"
          priority
        />
        <Heading className="line-clamp-3 md:text-5xl md:line-clamp-2 lg:text-7xl text-4xl text-mood-gray font-black">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What's going on here?
        </Heading>
      </div>
      <div className={cn("mx-2 mt-4 md:container md:max-w-5xl")}>
        <Heading className="text-4xl lg:text-6xl md:text-5xl text-mood-gray mb-5 font-black">
          This is my portfolio
        </Heading>
        <Paragraph className="lg:p-2 lg:mt-2 text-xl md:text-3xl sm:line-clamp-4 text-mood-gray font-medium tracking-tighter">
          Well hello people, my name is Dimas Saputra, i am a junior frontend
          developer especially React . based in Bekasi, Indonesia
        </Paragraph>
      </div>
      <div
        className={cn(
          "mx-2 mt-7 flex items-center justify-start gap-x-5 md:container md:max-w-5xl",
        )}
      >
        <Link
          href="/assets/pdf/resume.pdf"
          className="bg-mood-gray text-custom-white-900 hover:bg-custom-black-900 rounded-[10px] px-10 py-5 font-medium transition-all duration-[250ms]"
        >
          Resume
        </Link>
        <Link
          href="https://github.com/infinitedim"
          className="border-mood-gray text-mood-gray hover:bg-mood-gray hover:text-custom-white-900 rounded-[10px] border-2 px-10 py-5 font-medium transition-all duration-[250ms]"
        >
          Github
        </Link>
      </div>
    </div>
  );
}
