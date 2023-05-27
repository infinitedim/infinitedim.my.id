"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { ProjectCardProps } from "@/interfaces";
import { cn } from "@/utils";
import {
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
    <motion.div
      id="card"
      className="my-7 mx-auto w-full py-5 bg-[#ededed] rounded-[10px] shadow-[5px_5px_4px_rgba(0,0,0,0.25)]"
      key={Math.floor(Math.random() * 6281034723094)}
      {...props}
    >
      <div
        className={cn("mx-auto mb-5 flex w-[90%] items-center justify-between")}
      >
        <Heading
          className="text-2xl md:text-3xl cursor-pointer lg:text-4xl font-bold"
          title={projectTitle}
        >
          {projectTitle}
        </Heading>
        <div className={cn("flex items-center justify-between gap-x-2")}>
          <Link
            href={projectUrl}
            title="visit page"
          >
            <ExtLinkIcon className="h-6 w-6 md:h-8 md:w-8" />
          </Link>
          <Link
            href={projectRepo}
            title="view repo"
          >
            <GitForkIcon className="h-6 w-6 md:h-8 md:w-8" />
          </Link>
        </div>
      </div>
      <div className="mx-auto w-[90%]">
        <Paragraph
          className="font-medium text-xl md:text-2xl mb-5"
          title={projectDesc}
        >
          {projectDesc}
        </Paragraph>
        <Heading
          title="Tech stack"
          className="mb-2 font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter"
        >
          Tech stack:
        </Heading>
        <ul className="list-stack flex gap-x-2 justify-betweeen items-center">
          <li>
            <Link
              href="https://react.dev"
              title="React"
            >
              <ReactIcon className="h-8 w-8 transition-all duration-300 hover:scale-125" />
            </Link>
          </li>
          <li>
            <Link
              href="https://react.dev"
              title="React"
            >
              <ReactIcon className="h-8 w-8 transition-all duration-300 hover:scale-125" />
            </Link>
          </li>
          <li>
            <Link
              href="https://react.dev"
              title="React"
            >
              <ReactIcon className="h-8 w-8 transition-all duration-300 hover:scale-125" />
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);
