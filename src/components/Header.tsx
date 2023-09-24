/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable no-unsafe-optional-chaining */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { oswald } from "@/app/fonts";
import { menuIconAnimation } from "@/constants";
import { cn } from "@/utils";
import { GithubIcon, Heading } from "./atoms";
import Navbar from "./molecules/Navbar";

function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 flex w-full items-center justify-between",
      )}
    >
      <Navbar />
      <div
        className="flex-1"
        id="welcome-text"
      >
        <Heading
          as="h3"
          className={cn(
            `${oswald.className} ml-5 text-2xl font-medium text-woodsmoke-950`,
          )}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          viewport={{ once: true, amount: 1 }}
        >
          {pathname === "/"
            ? "Welcome"
            : pathname === "/about"
            ? "About"
            : pathname === "/blog"
            ? "Blog"
            : pathname === "/project"
            ? "Project"
            : pathname === "/contact"
            ? "Contact"
            : pathname === "/resume"
            ? "Resume"
            : "Page not Found"}
        </Heading>
      </div>
      <Link
        className={cn("mr-5 mt-5 self-start")}
        href="https://github.com/infinitedim"
      >
        <GithubIcon
          className="h-8 w-8"
          svgVariants={menuIconAnimation}
        />
      </Link>
      <div />
    </header>
  );
}

export default memo(Header);
