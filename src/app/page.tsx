import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Heading, Paragraph } from "@/components/atoms";
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
    <div className="container mb-10 max-w-5xl">
      <div className="mb-5 flex items-center justify-center md:mb-20">
        <Image
          src={Sapiens}
          quality={100}
          className="mt-10 md:h-2/5 md:w-2/5"
          alt="Hero"
          priority
        />
        <Heading
          as="h1"
          className="text-7xl text-primary font-black"
        >
          What&#8216;s going on here?
        </Heading>
      </div>
      <div className="mx-2 mt-4 md:container md:max-w-5xl">
        <Heading
          className="text-4xl lg:text-6xl md:text-5xl text-mood-gray mb-5 font-black"
          as="h1"
        >
          This is my portfolio
        </Heading>
        <Paragraph className="lg:p-2 lg:mt-2 text-xl md:text-3xl sm:line-clamp-4 text-mood-gray font-medium tracking-tighter">
          I am a junior front end web developer especially react.js based in
          bekasi indonesia. i am a fresh graduate from vocational high school
        </Paragraph>
      </div>
      <div className="mx-2 mt-7 flex items-center justify-start gap-x-5 md:container md:max-w-5xl">
        <Link
          href="/assets/pdf/resume.pdf"
          className="bg-primary text-secondary hover:bg-primary/90 rounded-[10px] px-6 py-3 font-medium transition-all duration-[250ms]"
        >
          Resume
        </Link>
        <Link
          href="https://github.com/infinitedim"
          className="border-primary text-primary hover:bg-primary hover:text-secondary rounded-[10px] border-2 px-6 py-3 font-medium transition-all duration-[250ms]"
        >
          Github
        </Link>
      </div>
    </div>
  );
}
