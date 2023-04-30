import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import {
  ExtLinkIcon,
  GitForkIcon,
  Heading,
  Paragraph,
} from "@/components/atoms";
import { cn } from "@/utils";
import Sapiens from "@/public/assets/svg/hero.svg";
import "@total-typescript/ts-reset";
import { projects } from "@/constants";

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
 * @returns {JSX.Element}
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
            "container mb-5 flex items-center justify-center md:mb-20 md:px-10",
          )}
        >
          <Image
            src={Sapiens}
            className={cn("mt-10 h-2/4 w-2/4")}
            alt="Hero"
            priority
          />
          <Heading className="md:text-5xl md:line-clamp-2 lg:text-7xl text-4xl text-mood-gray font-black">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            What's going on here?
          </Heading>
        </div>
        <div className={cn("container mt-4")}>
          <Heading className="text-4xl lg:text-6xl md:text-5xl text-mood-gray mb-5 font-black">
            This is my portfolio
          </Heading>
          <Paragraph className="text-2xl md:text-3xl sm:line-clamp-4 text-mood-gray font-medium tracking-tighter">
            Well hello people, my name is Dimas Saputra, i am a junior frontend
            developer especially React. based in Bekasi, Indonesia
          </Paragraph>
        </div>
        <div
          className={cn(
            "container mt-7 flex items-center justify-start gap-x-5 md:max-w-5xl",
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
          {projects.map((project) => {
            return (
              <div
                id="card"
                className="my-7 mx-auto w-full md:w-[90%] py-5 bg-[#ededed] rounded-[10px] shadow-[5px_5px_4px_rgba(0,0,0,0.25)]"
                key={Math.floor(Math.random() * 6281034723094)}
              >
                <div
                  className={cn(
                    "mx-auto mb-5 flex w-[90%] items-center justify-between",
                  )}
                >
                  <Heading
                    title={project.title}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold"
                  >
                    {project.title}
                  </Heading>
                  <div
                    className={cn("flex items-center justify-between gap-x-2")}
                  >
                    <Link
                      href={project.url}
                      title="visit my page"
                    >
                      <ExtLinkIcon className="h-6 w-6 md:h-8 md:w-8" />
                    </Link>
                    <Link
                      href={project.repo}
                      title="fork me"
                    >
                      <GitForkIcon className="h-6 w-6 md:h-8 md:w-8" />
                    </Link>
                  </div>
                </div>
                <div className="mx-auto w-[90%]">
                  <Paragraph className="font-medium text-base md:text-xl xl:text-2xl mb-5">
                    {project.description}
                  </Paragraph>
                  <Heading
                    title="Tech stack"
                    className="mb-2 font-bold text-base md:text-xl lg:text-2xl tracking-tighter"
                  >
                    Tech stack:
                  </Heading>
                  <ul className="list-stack flex gap-x-2 justify-betweeen items-center">
                    {project.techStack.map((stack) => {
                      const Components = stack.icon;
                      return (
                        <li
                          title={stack.name}
                          key={Math.floor(Math.random() * 628134750394)}
                        >
                          <Link href={stack.url}>
                            <Components className="h-8 w-8" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
