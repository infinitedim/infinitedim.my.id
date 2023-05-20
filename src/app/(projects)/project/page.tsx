"use client";

// import { motion } from "framer-motion";
import Link from "next/link";
import type { NamedExoticComponent } from "react";
import { projects } from "@/constants";
import {
  Heading,
  Paragraph,
  ExtLinkIcon,
  GitForkIcon,
} from "@/components/atoms";
import {
  AnimationableSVGProps,
  ProjectsType,
  TechStackProjects,
} from "@/interfaces";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";

export default function Page() {
  return (
    <section className={cn("container mx-auto mb-5 mt-14 max-w-5xl")}>
      <div className="max-w-5xl">
        <Heading className="text-4xl md:text-5xl text-mood-gray mb-5 font-black">
          My Exellent Works
        </Heading>
        <Paragraph className="text-xl md:text-2xl font-medium">
          this is my project pages, in this pages you&#8216;ll see my best
          projects i&#8216;ve been created, i created my project with my best,
          im so proud with my work and all of them build with love
        </Paragraph>
      </div>
      <div>
        {projects.map((project: ProjectsType) => {
          return (
            <div
              id="card"
              className="my-7 mx-auto w-full py-5 bg-[#ededed] rounded-[10px] shadow-[5px_5px_4px_rgba(0,0,0,0.25)]"
              key={Math.floor(Math.random() * 6281034723094)}
            >
              <div
                className={cn(
                  "mx-auto mb-5 flex w-[90%] items-center justify-between",
                )}
              >
                <Heading
                  className="text-2xl md:text-3xl cursor-pointer lg:text-4xl font-bold"
                  title={project.title}
                >
                  {project.title}
                </Heading>
                <div
                  className={cn("flex items-center justify-between gap-x-2")}
                >
                  <Link
                    href={project.url}
                    title="visit page"
                  >
                    <ExtLinkIcon className="h-6 w-6 md:h-8 md:w-8" />
                  </Link>
                  <Link
                    href={project.repo}
                    title="view repo"
                  >
                    <GitForkIcon className="h-6 w-6 md:h-8 md:w-8" />
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-[90%]">
                <Paragraph
                  className="font-medium text-xl md:text-2xl lg:text-3xl mb-5"
                  title={project.description}
                >
                  {project.description}
                </Paragraph>
                <Heading
                  title="Tech stack"
                  className="mb-2 font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter"
                >
                  Tech stack:
                </Heading>
                <ul className="list-stack flex gap-x-2 justify-betweeen items-center">
                  {project.techStack.map((stack: TechStackProjects) => {
                    const Icons: NamedExoticComponent<AnimationableSVGProps> =
                      stack.icon;
                    return (
                      <li key={Math.floor(Math.random() * 628134750394)}>
                        <Link
                          href={stack.url}
                          title={stack.name}
                        >
                          <Icons className="h-8 w-8 transition-all duration-300 hover:scale-125" />
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
  );
}
