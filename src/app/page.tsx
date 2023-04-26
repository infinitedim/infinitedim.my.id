import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import {
  ExtLinkIcon,
  GitForkIcon,
  Heading,
  Paragraph,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/atoms";
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
    <>
      <section
        id="hero-section"
        className={cn("container mx-auto mb-20 max-w-5xl")}
      >
        <div
          className={cn(
            "mb-5 flex items-center justify-center md:mb-20 md:px-10",
          )}
        >
          <Image
            src={Sapiens}
            quality={100}
            className={cn("mt-10 h-2/4 w-2/4")}
            alt="Hero"
            priority
          />
          <Heading className="md:text-5xl md:line-clamp-2 lg:text-7xl text-4xl text-mood-gray font-black">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            What's going on here?
          </Heading>
        </div>
        <div className={cn("mt-4 md:container")}>
          <Heading className="text-4xl lg:text-6xl md:text-5xl text-mood-gray mb-5 font-black">
            This is my portfolio
          </Heading>
          <Paragraph className="lg:p-2 lg:mt-2 text-2xl md:text-3xl mx-2 sm:line-clamp-4 text-mood-gray font-medium tracking-tighter">
            Well hello people, my name is Dimas Saputra, i am a junior frontend
            developer especially React. based in Bekasi, Indonesia
          </Paragraph>
        </div>
        <div
          className={cn(
            "mx-5 mt-7 flex items-center justify-start gap-x-5 md:container md:max-w-5xl",
          )}
        >
          <Link
            href="/assets/pdf/resume.pdf"
            className="bg-mood-gray text-custom-white-900 hover:bg-custom-black-900 rounded-[10px] px-8 py-4 font-medium transition-all duration-[250ms]"
          >
            Resume
          </Link>
          <Link
            href="https://github.com/infinitedim"
            className="border-mood-gray text-mood-gray hover:bg-mood-gray hover:text-custom-white-900 rounded-[10px] border-[1px] px-8 py-4 font-medium transition-all duration-[250ms]"
          >
            Github
          </Link>
        </div>
      </section>
      <section
        id="project-section"
        className={cn("container mx-auto mb-5 max-w-5xl")}
      >
        <div className="container">
          <Heading className="text-4xl md:text-5xl lg:text-6xl text-mood-gray mb-5 font-black">
            My Exellent Works
          </Heading>
          <Paragraph className="text-2xl md:text-3xl text-mood-gray font-medium tracking-tighter">
            a couple of my selection project
          </Paragraph>
        </div>
        <div className="container max-w-5xl mx-auto">
          <div
            id="card"
            className="my-7 mx-auto w-[90%] py-5 bg-[#ededed] rounded-[10px] shadow-[5px_5px_4px_rgba(0,0,0,0.25)]"
          >
            <div
              className={cn(
                "mx-auto mb-5 flex w-[90%] items-center justify-between",
              )}
            >
              <Heading
                title="card title"
                className="text-2xl font-bold"
              >
                Miolica
              </Heading>
              <div className={cn("flex items-center justify-between gap-x-2")}>
                <Link
                  href="https://miolica.vercel.app"
                  title="visit my page"
                >
                  <ExtLinkIcon />
                </Link>
                <Link
                  href="https://github.com/infnitedim/ecommerce"
                  title="fork me"
                >
                  <GitForkIcon />
                </Link>
              </div>
            </div>
            <div className="mx-auto w-[90%]">
              <Paragraph className="font-medium text-base mb-5">
                Miolica is e-commerce project that offer some features like
                cart, wishlist, seller, and own shipping system
              </Paragraph>
              <Heading
                title="Tech stack"
                className="mb-2 font-bold tracking-tighter"
              >
                Tech stack:
              </Heading>
              <ul className="list-stack flex gap-x-2 justify-betweeen items-center">
                <li title="react">
                  <Link href="https://react.dev">
                    <ReactIcon />
                  </Link>
                </li>
                <li title="react">
                  <Link href="https://typescriptlang.org">
                    <TypescriptIcon />
                  </Link>
                </li>
                <li title="react">
                  <Link href="https://tailwindcss.com">
                    <TailwindIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
