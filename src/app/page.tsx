import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Button, Heading, Paragraph } from "@/components/atoms";
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
    "Dimas",
    "Dimas Saputra",
    "infinitedim",
    "infinitedim portfolio",
    "portfolio infinitedim",
    "Dimas portfolio",
    "devixid",
    "devix",
  ],
  icons: "https://infinitedim.vercel.app/hero.svg",
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
 * @returns {JSX.Element}
 */
export default function page() {
  return (
    <div className={cn("phone:container max-w-5xl")}>
      <div
        className={cn(
          "phone:container tablet:px-10 mb-5 flex items-center justify-center p-5",
        )}
      >
        <Image
          src={Sapiens}
          quality={100}
          className={cn(
            "phone:w-full phone:h-full tablet:w-2/5 tablet:h-2/5 mt-10",
          )}
          alt="Hero"
          aria-label="Hero Images"
          priority
        />
        <Heading className="phone:line-clamp-3 laptop:line-clamp-2 phone:text-5xl laptop:text-6xl text-mood-gray font-black">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What's going on here?
        </Heading>
      </div>
      <div className={cn("mx-2 mt-4")}>
        <Heading className="phone:text-5xl laptop:text-6xl text-mood-gray mb-5 font-black">
          This is my portfolio
        </Heading>
        <Paragraph className="laptop:p-2 laptop:mt-2 phone:text-3xl laptop:text-4xl phone:line-clamp-4 text-mood-gray font-medium tracking-tighter">
          Well hello people, my name is Dimas Saputra, i am a junior frontend
          developer especially ReactJS. based in Bekasi, Indonesia
        </Paragraph>
      </div>
      <div className={cn("mx-2 mt-7 flex items-center justify-start gap-x-5")}>
        <Button className="bg-mood-gray text-custom-white-900 hover:bg-custom-black-900 rounded-[10px] px-16 py-5 font-medium transition-all duration-[250ms]">
          <Link href="/assets/pdf/resume.pdf">Resume</Link>
        </Button>
        <Button className="border-mood-gray text-mood-gray hover:bg-mood-gray hover:text-custom-white-900 rounded-[10px] border-2 px-16 py-5 font-medium transition-all duration-[250ms]">
          <Link href="https://github.com/infinitedim">Github</Link>
        </Button>
      </div>
    </div>
  );
}
