"use client";

import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { ProjectCardProps } from "@/interfaces";
import { cn } from "@/utils";
import Test from "@/public/assets/img/portfolio.png";
import {
  Div,
  Heading,
  ExtLinkIcon,
  GitForkIcon,
  Paragraph,
  ReactIcon,
} from "./atoms";

function ProjectCard({
  projectTitle,
  projectDesc,
  projectUrl,
  projectRepo,
  ...props
}: ProjectCardProps) {
  return (
    <Div
      className="my-7 mx-auto relative flex items-center justify-between h-[50vh] overflow-hidden w-full py-5 bg-[#ededed] rounded-[10px] shadow-[5px_5px_4px_rgba(0,0,0,0.25)]"
      {...props}
    >
      <Div className="flex-1 absolute top-0 inset-x-0 w-2/5 h-full">
        <Image
          src={Test}
          alt={`${projectTitle} project`}
          className="w-full h-full"
        />
      </Div>
      <Div className="absolute right-0 inset-y-0 w-3/5 flex flex-col">
        <Div className="flex items-center justify-between w-4/5 mx-auto">
          <Heading
            className="text-2xl md:text-3xl cursor-pointer lg:text-4xl font-bold"
            title={projectTitle}
          >
            {projectTitle}
          </Heading>
          <Div className="flex items-center gap-x-2">
            <Link
              href={projectUrl}
              title="visit me"
            >
              <ExtLinkIcon className="h-6 w-6 md:h-8 md:w-8" />
            </Link>
            <Link
              href={projectRepo}
              title="repo"
            >
              <GitForkIcon className="h-6 w-6 md:h-8 md:w-8" />
            </Link>
          </Div>
        </Div>
        <Div className="flex flex-col w-4/5 mx-auto">
          <Paragraph
            className="font-medium text-xl md:text-2xl mb-5"
            title={projectDesc}
          >
            {projectDesc}
          </Paragraph>
          <Div>
            <Heading className="mb-2 font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter">
              Tech Stack :
            </Heading>
            <ul className={cn("flex w-full items-center gap-x-2")}>
              <li>
                <Link
                  href="https://react.dev"
                  title="react"
                >
                  <ReactIcon className="w-8 h-8" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://react.dev"
                  title="react"
                >
                  <ReactIcon className="w-8 h-8" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://react.dev"
                  title="react"
                >
                  <ReactIcon className="w-8 h-8" />
                </Link>
              </li>
            </ul>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default memo(ProjectCard);
