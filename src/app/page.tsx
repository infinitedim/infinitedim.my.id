import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Div, Heading, Paragraph } from "@/components";
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

export default function Page() {
  return (
    <section
      id="hero-section"
      className={cn(
        "container mx-auto mb-10 mt-10 max-w-5xl md:mb-20 lg:mt-20",
      )}
    >
      <Div
        className={cn(
          "mb-5 flex items-center justify-center md:mb-20 md:px-10 lg:mt-20",
        )}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: "-100vw", opacity: 0 }}
        transition={{ duration: 1, type: "tween" }}
      >
        <Image
          alt="Hero"
          className={cn("mt-10 h-3/4 w-3/4 lg:h-3/5 lg:w-3/5")}
          src={Sapiens}
          priority
        />
        <Heading
          className="md:text-5xl md:line-clamp-2 lg:text-6xl text-4xl text-mood-gray font-black"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: "100vw", opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          What&#8216;s going on here?
        </Heading>
      </Div>
      <Div className="md:container mt-4 max-w-5xl">
        <Heading
          className="text-4xl lg:text-6xl md:text-5xl text-mood-gray mb-5 font-black"
          initial={{ opacity: 0, y: -100, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          viewport={{ once: true, amount: 1 }}
        >
          This is my portfolio
        </Heading>
        <Paragraph
          className="text-xl md:text-2xl lg:text-3xl sm:line-clamp-4 text-mood-gray font-medium tracking-tighter"
          initial={{ opacity: 0, y: 50, rotate: 10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          viewport={{ once: true, amount: 1 }}
        >
          Well hello people, my name is Dimas Saputra, i am a junior frontend
          developer especially React. based in Bekasi, Indonesia
        </Paragraph>
      </Div>
      <Div
        className={cn(
          "mb-10 mt-7 flex items-center justify-start gap-x-5 md:container",
        )}
      >
        <Div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 80,
            duration: 1,
          }}
        >
          <Link
            href="/assets/pdf/resume.pdf"
            className="bg-mood-gray text-custom-white-900 hover:bg-custom-black-900 rounded-[10px] px-8 py-4 font-medium transition-all duration-[250ms]"
            title="Resume"
          >
            Resume
          </Link>
          <span className="sr-only">Resume</span>
        </Div>
        <Div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 80,
            duration: 1,
          }}
        >
          <Link
            href="https://github.com/infinitedim"
            className="border-mood-gray text-mood-gray hover:bg-mood-gray hover:text-custom-white-900 rounded-[10px] border-[1px] px-8 py-4 font-medium transition-all duration-[250ms]"
            title="Github"
          >
            Github
          </Link>
          <span className="sr-only">Github</span>
        </Div>
      </Div>
    </section>
  );
}
